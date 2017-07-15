import * as Elements from './elements'
import examples from './examples'

import * as mixins from './mixins'

let docs = {
  state: Object.assign({}, Elements)
}

function applyMixins (state, Vue) {
  for (let name in state) {
    state[name] = applyMixin(state[name], name, Vue)
  }
  applyGroups(state)
}

function mapGroups (groups) {
  return groups.map(value => {
    let text = Elements[value].shortName || value
    return {
      text: `${value} - ${text}`,
      value
    }
  })
}

function applyGroups (state) {
  state.elements = mapGroups([
    'SavBtn',
    'SavIcon',
    'SavRadio',
    'SavRadioGroup',
    'SavCheck',
    'SavCheckGroup',
    'SavTip'
  ])
  state.layouts = mapGroups([
    'SavRow',
    'SavCol',
    'SavTile'
  ])
  state.components = mapGroups([
    'SavTab',
    'SavForm'
  ])
  state.lists = state.elements.concat(state.layouts).concat(state.components)
}

let arrKeys = [
  'props',
  'slots',
  'events',
  'examples',
]

function applyMixin (it, name, Vue) {
  if (!it.props) {
    it.props = []
  }
  it.name = name
  if (Array.isArray(it.mixins) && it.mixins.length) {
    let ret = {}
    arrKeys.forEach((name) => ret[name] = [])
    it.mixins.forEach((name) => {
      let mixin = mixins[name]
      if (mixin) {
        arrKeys.forEach((name) => {
          if (mixin[name]) {
            applyPush(ret[name], mixin[name])
          }
        })
      }
    })
    arrKeys.forEach((name) => {
      if (it[name]) {
        applyPush(ret[name], it[name])
      }
      delete ret[name].$keys
    })
    it = ret
  }
  let component = Vue.component(name)
  if (component) {// 属性处理
    let props = (it.props || []).reduce((obj, attr) => {
      obj[attr.name] = attr
      return obj
    }, {})

    let componentProps = [].concat(component.options.mixins).concat(component.options).reduce((ret, item) => {
      if (item && item.props) {
        Object.assign(ret, item.props)
      }
      return ret
    }, {})

    Object.keys(componentProps).forEach((propName) => {
      let propItem = props[propName]
      if (!props[propName]) {
        props[propName] = propItem = {
          name: propName 
        }
        it.props.push(propItem)
      }
      let comProp = componentProps[propName]
      let comType = comProp.type
      if ('default' in comProp) {
        propItem.default = cloneValue(comProp.default, comType)
        if (!comType) {
          let typeName = typeof propItem.default
          typeName = typeName[0].toUpperCase() + typeName.substr(1, typeName.length)
          comType = typeName
        }
      }
      if (comType) {
        if (Array.isArray(comType)) {
          propItem.type = comType.map(it => it.name).join(' | ')
        } else {
          propItem.type = isString(comType) ? comType : comType.name
        }
      }
    })
    // console.log(name, props, componentProps)
    // console.log(name, component.options.props)
  }
  return it
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isNumber (val) {
  return typeof val === 'number'
}

function isString (val) {
  return typeof val === 'string'
}

function isNull (val) {
  return val === null
}

// function isObject (val) {
//   return val !== null && typeof val === 'object'
// }

function isArray (val) {
  return Array.isArray(val)
}

function isFunction (val) {
  return typeof val === 'function'
}

function cloneValue (val, types) {
  if (isFunction(val)) {
    if (isArray(types)) {
      for (let typeFn of types) {
        if (val === typeFn) {
          return val.name === 'Function' ? val.name : val()
        }
      }
      return val()
    } else if (types) {
      return isFunction(types) ? val.name : val()
    }
  } else if (isBoolean(val) || isNumber(val) || isString(val) || isNull(val)){
    return val
  } else {
    return JSON.parse(JSON.stringify(val))
  }
}

function applyPush (tarItem, newItem) {
  let keys = tarItem.$keys || (tarItem.$keys = {})
  newItem.forEach((it) => {
    if (!keys[it.name]) {
      tarItem.push(it)
      keys[it.name] = true
    }
  })
}

export function install (Vue) {
  examples.install(Vue)
  applyMixins(docs.state, Vue)
}

Object.defineProperty(docs, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default docs
