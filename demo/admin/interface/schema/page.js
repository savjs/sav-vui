exports.ResPageLogin = {
  props: {
    username: String,
    password: String
  },
  res: {
    username: 'jetiny',
    password: '123465'
  }
}

exports.ResPageRegister = {
  props: {
    username: String,
    nickname: String,
    password: String,
    confirmPassword: String
  },
  res: {
    username: 'jetiny',
    nickname: 'helo',
    password: '123465',
    confirmPassword: '123456'
  }
}
