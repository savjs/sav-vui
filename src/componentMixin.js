
export function componentMixin (Vue) {
  let extend = Vue.extend
  Vue.extend = function (options) {
    if (typeof options === 'object') {
      if (options.componentMixins) {
        let components = options.components || (options.components = {})
        options.componentMixins.forEach((it) => {
          let name = getComponentName(components, it.name)
          it = Object.assign(components[name], it)
          // reference from => mixin
          if (it.extends) { // Component.childComponent
            let mixins = getComponentMixins(this, it.extends)
            it.mixins = [].concat(it.mixins || [], mixins)
          }
          if (it.export) {
            delete components[name]
            Vue.component(name, it)
          }
        })
        delete options.componentMixins
      }
    }
    return extend.call(this, options)
  }
}

function getComponentMixins (Vue, refs) {
  let mixins = []
  if (!Array.isArray(refs)) {
    refs = [refs]
  }
  for (let ref of refs) {
    let [name, childName] = ref.split('.')
    let component = Vue.component(name)
    if (!component) {
      throw new Error(`componentMixin unable to resolve component: ${name}`)
    }
    if (childName) {
      let opts
      try {
        opts = component.extendOptions.components[childName]
        if (!opts) {
          throw 1
        }
      } catch (err) {
        throw new Error(`componentMixin unable to resolve child component: ${childName} of ${name}`)
      }
      mixins.push(opts)
    } else {
      let opts = Object.assign({}, component.extendOptions)
      delete opts['_Ctor']
      mixins.push(opts)
    }
  }
  return mixins
}

const nameIter = [camelCase, pascalCase, hyphenCase]

function getComponentName (components, name) {
  if (name in components)
    return name
  for (let iter of nameIter) {
    name = iter(name)
    if (name in components)
      return name
  }
  components[name] = {}
  return name
}

/**
 * Camelize a hyphen-delmited string.
 */
const camelCaseRE = /[-_](\w)/g
function camelCase (str) {
  return lcfirst(str.replace(camelCaseRE, (_, c) => c ? c.toUpperCase() : ''))
}

/**
 * Capitalize a string.
 */
function ucfirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * UnCapitalize a string.
 */
function lcfirst (str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

const replaceAZRE = /([A-Z])/g

/**
 * Hyphenate a camelCase string.
 */
function hyphenCase (str) {
  return camelCase(str).replace(replaceAZRE, '-$1').toLowerCase()
}

function pascalCase (str) {
  return ucfirst(camelCase(str))
}
