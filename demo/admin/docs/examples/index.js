import Example from './Example.vue'
import BtnModify from './button/BtnModify.vue'
import GridRow from './grid/GridRow.vue'
import GridCol from './grid/GridCol.vue'
import GridColOffset from './grid/GridColOffset.vue'

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  BtnModify,
  GridRow,
  GridCol,
  GridColOffset,
  Example
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
