const {executeRollup} = require('rollup-standalone')

executeRollup({
  entry: 'src/index.js',
  dest: 'dist/js/sav-vui.js',
  format: 'umd',
  vueOptions: true,
  moduleName: 'SavVui'
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p);
  console.log('reason:', reason);
})
