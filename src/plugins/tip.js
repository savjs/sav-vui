
export default function initSavTip () {
  if (installed) {
    return
  }
  document.addEventListener('mousedown', click)
  document.addEventListener('mousemove', move)
}

let tip
let tipTarget
let tipVisible = false
let installed = false

function getTip () {
  if (!tip) {
    tip = document.createElement('div')
    tip.className = 'sav-tooltip'
    tip.id = 'tip'
    document.body.appendChild(tip)
  }
  return tip
}

function click (event) {
  if (!(event.buttons === 1 || event.which === 1)) {
    return
  }
  if (tipVisible) {
    tipVisible = false
    let {style} = getTip()
    style.transition = 'opacity 150ms'
    style.opacity = 0
    setTimeout(() => {
      if (!tipTarget) {
        style.display = `none`
      }
    }, 100)
  }
}

function move (event) {
  if (tipTarget) {
    if (event.target === tipTarget) {
      return
    }
    if (tipTarget.contains(event.target)) {
      if (!isTip(event.target.dataset)) {
        return
      }
    }
    tipTarget = null
  }
  let tipNode = getTipNode(event.target)
  if (tipNode) {
    tipTarget = tipNode
    let tip = getTip()
    let {x, y} = applyTip(tipTarget.dataset, tipTarget, tip)
    let {style} = tip
    style.transition = 'opacity 150ms, transform 150ms'
    style.transform = `translate(${x}, ${y})`
    style.display = `block`
    style.opacity = 1
    tipVisible = true
  } else if (tipVisible) {
    let {style} = getTip()
    style.transition = 'opacity 150ms, transform 150ms'
    style.opacity = 0
    setTimeout(() => {
      if (!tipTarget) {
        style.display = `none`
      }
    }, 100)
    tipVisible = false
  }
}

function getTipNode (node) {
  if (node.dataset) {
    return node.closest('[data-tip]') || node.closest('[data-tip-html]')
  }
}

function isTip ({tip, tipHtml}) {
  return !!(tip || tipHtml)
}

const clss = ['is-left', 'is-top', 'is-right', 'is-bottom']

function applyTip (opts, target, tipNode) {
  if (opts.tip) {
    tipNode.innerText = opts.tip
  } else if (opts.tipHtml) {
    tipNode.innerHTML = opts.tipHtml
  }
  let x
  let y
  let {left, top, right, bottom} = tipTarget.getBoundingClientRect()
  let offset = opts.tipOffset || 4
  let hx = Math.round((left + right) / 2)
  let hy = Math.round((bottom + top) / 2)
  x = `calc(-50% + ${hx}px)`
  y = `calc(-50% + ${hy}px)`
  switch (opts.tipAlign) {
    case 'left':
      x = `calc(-100% + ${Math.round(left - offset)}px)`
      break
    case 'top':
      y = `calc(-100% + ${Math.round(top - offset)}px)`
      break
    case 'bottom':
      y = `${offset + bottom}px`
      break
    default:
      x = `${Math.round(right + offset)}px`
      break
  }
  clss.forEach((cls) => {
    tipNode.classList.remove(cls)
  })
  tipNode.classList.add(`is-${opts.tipAlign || 'right'}`)
  return {x, y}
}
