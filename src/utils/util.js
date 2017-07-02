
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
