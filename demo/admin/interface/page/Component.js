import {Modal, get} from 'sav'

@Modal()
export default class Component {
  @get({
    path: '',
    title: '容器'
  })
  index () {}
}
