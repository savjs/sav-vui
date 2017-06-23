const sass = require('node-sass')
const path = require('path')
const {mkdirAsync, writeFileAsync} = require('./file')

let distCssDir = path.resolve(__dirname, '../dist/css/')

let includePaths = [
  path.resolve(__dirname, '../sass')
]

// nested, expanded, compact, compressed
let outputStyle = 'expanded'

mkdirAsync(distCssDir).then(() => {
  return Promise.all([
    sassRenderAsync({
      outputStyle,
      sourceMap: true,
      file: path.resolve(__dirname, '../sass/sav-vui.sass'),
      outFile: path.resolve(distCssDir, 'sav-vui.css'),
      includePaths
    }),
    sassRenderAsync({
      outputStyle,
      file: path.resolve(__dirname, '../sass/font-awesome.sass'),
      outFile: path.resolve(distCssDir, 'font-awesome.css'),
      includePaths
    }),
    sassRenderAsync({
      outputStyle,
      file: path.resolve(__dirname, '../sass/photon.sass'),
      outFile: path.resolve(distCssDir, 'photon.css'),
      includePaths
    }),
  ]).then(() => {
    console.log('Done')
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
      let ret = [writeFileAsync(outFile, result.css)]
      if (sourceMap) {
        ret.push(writeFileAsync(outFile + '.map', result.map))
      }
      Promise.all(ret).then(resolve, reject)
    })
  })
}