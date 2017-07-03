import SavBtn from './components/SavBtn.vue'
import SavInput from './components/SavInput.vue'
import SavText from './components/SavText.vue'
import SavCheck from './components/SavCheck.vue'
import SavCheckGroup from './components/SavCheckGroup.vue'
import SavRadio from './components/SavRadio.vue'
import SavRadioGroup from './components/SavRadioGroup.vue'
import SavIcon from './components/SavIcon.vue'
import SavField from './components/SavField.vue'
import SavForm from './components/SavForm.vue'
import SavTile from './components/SavTile.vue'
import SavSelect from './components/SavSelect.vue'
import SavRow from './components/SavRow.vue'
import SavCol from './components/SavCol.vue'

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
  SavCheckGroup,
  SavRadio,
  SavRadioGroup,
  SavIcon,
  SavField,
  SavForm,
  SavSelect,
  SavTile,
  SavRow,
  SavCol
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}

export default components
