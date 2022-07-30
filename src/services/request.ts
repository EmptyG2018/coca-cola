import { message } from 'antd';
import { extend } from 'umi-request';
import type { ResponseError } from 'umi-request';

const errorHandler = async (error: ResponseError) => {
  if (error.response) {
    const data = await error.response.clone().json();
    message.error(data.msg);
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    message.error({
      key: 'server error',
      content: "服务器异常错误！",
    });
  }

  throw error; // 如果throw. 错误将继续抛出.
};

const instance = extend({
  prefix: process.env.REACT_APP_HOST,
  timeout: 10000,
  errorHandler,
});

export default instance;


