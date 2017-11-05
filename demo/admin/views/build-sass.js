const sass = require('node-sass')
const path = require('path')
const {fse} = require('rollup-standalone')

let distCssDir = path.resolve(__dirname, '../static/css/')

let includePaths = [
  path.resolve(__dirname, '../sass')
]

let IS_PROD = process.env.NODE_ENV === 'production'

// nested, expanded, compact, compressed
let outputStyle = IS_PROD ? 'compressed' : 'expanded'

fse.ensureDir(distCssDir).then(() => {
  return Promise.all([
    sassRenderAsync({
      outputStyle,
      sourceMap: !IS_PROD,
      file: path.resolve(__dirname, '../sass/app.sass'),
      outFile: path.resolve(distCssDir, 'app.css'),
      includePaths
    }),
  ]).then(() => {
    console.log('Build Sass Done.')
  })
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

function sassRenderAsync (opts) {
  return new Promise((resolve, reject) => {
    sass.render(opts, (err, result) => {
      if (err) {
        return reject(err)
      }
      let {outFile, sourceMap} = opts
      let ret = [fse.outputFile(outFile, result.css)]
      if (sourceMap) {
        ret.push(fse.outputFile(outFile + '.map', result.map))
      }
      Promise.all(ret).then(resolve, reject)
    })
  })
}
