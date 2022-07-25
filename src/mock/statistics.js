const Mock = require("mockjs");

const statistics = {
  getTimes() {
    return Mock.mock({
      code: 200,
      data: {
        'records|1-16': [{
          'type|1-4': 1,
          'toSpeical': '@ctitle(2, 4)',
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

module.exports = statistics;