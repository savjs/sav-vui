import {Modal, get} from 'sav'

@Modal()
export default class Element {
  @get({
    title: '选择框'
  })
  select () {}

  @get({
    title: "元素",
    path: '',
  })
  index() {}
}
