const Mock = require("mockjs");

const special = {
  getSpecials() {
    return Mock.mock({
      code: 200,
      data: {
        'records|1-16': [{
          'id': '@id()',
          'title': '@ctitle(2, 4)',
          'desc': '@cparagraph()',
          'thumb': '@image(100*200)',
          'createTime': '@date(T)',
        }],
        current: 1,
        total: 40,
      },
      msg: '成功'
    });
  },
}

module.exports = special;