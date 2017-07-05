
export function trust (val) {
  return val && val !== 'false' && val !== '0'
}

export function makeOptions(arr) {
  return arr.map((name) => {
    return {
      text: `is-${name}`,
      value: name
    }
  })
}

const TransitionEndEvent = {
  WebkitTransition : 'webkitTransitionEnd',
  MozTransition    : 'transitionend',
  OTransition      : 'oTransitionEnd otransitionend',
  transition       : 'transitionend'
}

export function transitionEndTest () {
  const el = document.createElement('bootstrap')
  for (const name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return {
        end: TransitionEndEvent[name]
      }
    }
  }
  return false
}
