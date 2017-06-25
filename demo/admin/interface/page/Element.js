import {Modal, get} from 'sav'

@Modal()
export default class Element {
  @get({
    title: '标签页'
  })
  tabs () {}

  @get({
    title: '按钮'
  })
  buttons () {}
}
