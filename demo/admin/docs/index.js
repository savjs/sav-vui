import * as Elements from './elements'
import examples from './examples'

import * as mixins from './mixins'

let docs = {
  structs: Object.assign({}, Elements)
}

function applyMixins (structs) {
  for (let name in structs) {
    structs[name] = applyMixin(structs[name])
  }
  console.log(structs)
}

let arrKeys = [
  'props',
  'slots',
  'events',
  'examples',
]

function applyMixin (it) {
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
    return ret
  }
  return it
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

applyMixins(docs.structs)

export function install (Vue) {
  examples.install(Vue)
}

Object.defineProperty(docs, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default docs
