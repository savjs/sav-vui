import SavBtn from './components/SavBtn.vue'
import SavInput from './components/SavInput.vue'
import SavText from './components/SavText.vue'
import SavCheck from './components/SavCheck.vue'
import SavRadio from './components/SavRadio.vue'
import SavIcon from './components/SavIcon.vue'
import SavField from './components/SavField.vue'
import SavForm from './components/SavForm.vue'

import directives from './directives/index.js'

export function install (Vue) {
  Object.keys(directives).forEach((it) => {
    Vue.directive(it, directives[it])
  })
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  SavBtn,
  SavInput,
  SavText,
  SavCheck,
  SavRadio,
  SavIcon,
  SavField,
  SavForm
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
