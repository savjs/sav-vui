import {Modal, get} from 'sav'

@Modal()
export default class Layout {
  @get({
    title: 'tile'
  })
  tile () {}

  @get({
    title: "布局",
    path: '',
  })
  index() {}
}
