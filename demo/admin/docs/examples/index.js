import Example from './Example.vue'
import Api from './Api.vue'

import BtnModify from './button/BtnModify.vue'
import BtnGroup from './button/BtnGroup.vue'

import SelectBasic from './select/SelectBasic.vue'

import FlipBasic from './flip/FlipBasic.vue'

import GridRow from './grid/GridRow.vue'
import GridCol from './grid/GridCol.vue'
import GridColOffset from './grid/GridColOffset.vue'

import RadioSingle from './radio/RadioSingle.vue'
import RadioBoolean from './radio/RadioBoolean.vue'
import RadioGroup from './radio/RadioGroup.vue'

import CheckBasic from './check/CheckBasic.vue'
import CheckBoolean from './check/CheckBoolean.vue'
import CheckGroup from './check/CheckGroup.vue'
import CheckGroupTiny from './check/CheckGroupTiny.vue'

import TabModify from './tab/TabModify.vue'
import TabComponent from './tab/TabComponent.vue'

import TileBasic from './tile/TileBasic.vue'

import TextArea from './text/TextArea.vue'
import MessagePrompt from './message/MessagePrompt.vue'
import SwitchBasic from './switch/SwitchBasic.vue'

import FormCol from './form/FormCol.vue'

import IconPhoton from './icon/IconPhoton.vue'
import IconFontAwesome from './icon/IconFontAwesome.vue'


import TipDirective from './tip/TipDirective.vue'
import TreeModify from './tree/TreeModify.vue'
import ModalModify from './modal/ModalModify.vue'

import InputModify from './input/InputModify.vue'
import DatepickerModify from './datepicker/DatepickerModify.vue'
import PoptipModify from './Poptip/PoptipModify.vue'
import BadgeModify from './badge/BadgeModify.vue'

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  BtnModify,
  BtnGroup,

  SelectBasic,

  FlipBasic,

  GridRow,
  GridCol,
  GridColOffset,

  RadioSingle,
  RadioBoolean,
  RadioGroup,

  CheckBasic,
  CheckBoolean,
  CheckGroup,
  CheckGroupTiny,

  TabModify,
  TabComponent,

  TileBasic,
  MessagePrompt,
  SwitchBasic,

  TextArea,

  FormCol,

  IconPhoton,
  IconFontAwesome,

  TipDirective,
  TreeModify,
  ModalModify,
  InputModify,
  PoptipModify,
  BadgeModify,

  Api,
  Example,
  DatepickerModify
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
