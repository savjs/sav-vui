import {Modal, get} from 'sav'

@Modal()
export default class Element {
  @get({
    title: '标签页'
  })
  tab () {}

  @get({
    title: '按钮'
  })
  btn () {}

  @get({
    title: '输入框'
  })
  input () {}

  @get({
    title: '单选'
  })
  radio () {}

  @get({
    title: '多选'
  })
  check () {}

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
