const path = require('path')
const {mkdirAsync, writeFileAsync} = require('./file')
const {resolveIcon} = require('./icon.js')

let plugins = ['photon', 'font-awesome']

Promise.all(plugins.map((name) => {
  let config = resolveIcon(name)
  return Promise.all([
    config.updateIcons(),
    config.copyFonts(),
  ])
})).then(() => {
  console.log('Done', plugins.join())
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
