
export function copy (text) {
  const code = text
  const clipboard = new Clipboard(document.body, {
    text () {
      return code
    }
  })
  clipboard.on('success', (e) => {
      e.clearSelection()
      clipboard.destroy()
  })
}
