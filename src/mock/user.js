const Mock = require("mockjs");

const user = {
  login() {
    return Mock.mock({
      code: 200,
      data: {
        'token': '@guid()',
      },
      msg: '成功'
    });
  },
  loginToPhone() {
    return Mock.mock({
      code: 200,
      data: {
        'token': '@guid()',
      },
      msg: '成功'
    });
  },
  getVerifyCode() {
    return Mock.mock({
      code: 200,
      data: {
        'code|1000-9999': 1000,
      },
      msg: '成功',
    })
  },
  getUserInfo() {
    return Mock.mock({
      code: 200,
      data: {
        'createTime': '@date(T)',
        'updateTime': '@date(T)',
        'email': '@email',
      }
    })
  }
}

module.exports = user;