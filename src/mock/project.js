const Mock = require("mockjs");

const project = {
  getProjects() {
    return Mock.mock({
      code: 200,
      data: {
        'records|1-16': [{
          'id': '@id()',
          'title': '@ctitle(20)',
          'desc': '@cparagraph()',
          'thumb': '@image(100*200)',
          'createTime': '@date(T)',
          'webUrl': '@url()',
          'gitUrl': '@url()',
        }],
        current: 1,
        total: 40,
      },
      msg: '成功'
    });
  },
  // getArticle() {
  //   return Mock.mock({
  //     code: 200,
  //     data: {
  //       'id': '@id()',
  //       'title': '@ctitle(20)',
  //       'desc': '@cparagraph()',
  //       'thumb': '@image(100*200)',
  //       'pushTime': '@date(T)',
  //       'articleType|1-2': 1,
  //       'count': '@integer(10, 1000)',
  //       'tags|1-4': [{
  //         'id': '@id()',
  //         'title|1': [
  //           "教程",
  //           "typescript",
  //           "jquery",
  //           "心得",
  //           "性能优化",
  //           "react",
  //           "vue",
  //           "测试"
  //         ]
  //       }],
  //       'content': '@cparagraph(1000)',
  //     },
  //     msg: '成功',
  //   })
  // }
}

module.exports = project;