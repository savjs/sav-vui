const sass = require('node-sass')
const path = require('path')
const {mkdirAsync, writeFileAsync} = require('./file')

let distCssDir = path.resolve(__dirname, '../dist/css/')
let vuiCss = path.resolve(distCssDir, 'sav-vui.css')
let vuiSass = path.resolve(__dirname, '../sass/sav-vui.sass')

function sassRenderAsync (opts) {
  return new Promise((resolve, reject) => {
    sass.render(opts, (err, result) => {
      if (err) {
        return reject(err)
      }
      resolve(result)
    })
  })
}

mkdirAsync(distCssDir).then(() => {
  return sassRenderAsync({
    file: vuiSass,
    outFile: vuiCss,
    sourceMap: true,
    includePaths: [
      path.resolve(__dirname, '../sass')
    ]
  }).then((ret) => {
    return Promise.all([
      writeFileAsync(vuiCss, ret.css),
      writeFileAsync(vuiCss + '.map', ret.map),
    ])
  }).then(() => {
    console.log('Done', vuiCss)
  })
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
