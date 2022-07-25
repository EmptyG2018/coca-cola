const Mock = require("mockjs");

const tag = {
  getTags() {
    return Mock.mock({
      code: 200,
      data: {
        'records|1-48': [{
          'id': '@id()',
          'title': '@ctitle(2, 5)',
          'createTime': '@date(T)',
        }]
      },
      total: 40,
      msg: '成功'
    });
  }
}

module.exports = tag;