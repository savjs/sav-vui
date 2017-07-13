import SavColModify from './modifies/SavColModify.vue'
import SavColorModify from './modifies/SavColorModify.vue'
import SavSizeModify from './modifies/SavSizeModify.vue'
import SavFlexModify from './modifies/SavFlexModify.vue'
import SavAlignModify from './modifies/SavAlignModify.vue'

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  SavColModify,
  SavColorModify,
  SavSizeModify,
  SavAlignModify,
  SavFlexModify
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
