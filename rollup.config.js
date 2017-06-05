import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'

export default {
  entry: 'src/index.js',
  dest: 'dist/sav-vui.js',
  format: 'umd',
  plugins: [
    vue(),
    babel({
      babelrc: false,
      externalHelpers: false,
      exclude: 'node_modules/**'
    })
  ],
  onwarn (err) {
    if (err) {
      if (err.code !== 'UNRESOLVED_IMPORT') {
        console.log(err.code, err.message)
      }
    }
  }
}
