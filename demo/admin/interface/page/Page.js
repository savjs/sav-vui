import {Modal, get} from 'sav'

@Modal()
export default class Page {
  @get({
    title: '登录页面'
  })
  login () {}

  @get({
    title: '注册页面'
  })
  register () {}
}
