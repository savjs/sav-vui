import {Modal, get} from 'sav'

@Modal({
  path: ''
})
export default class Home {
  @get({
    path: '',
    title: '仪表板'
  })
  index () {}
}
