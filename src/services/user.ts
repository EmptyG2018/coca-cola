import request from "./request";

// 账号登录
export const login = (params: Params.Login) => {
  return request<API.Login>("/login", {
    method: "post",
  });
};

// 手机登录
export const loginToPhone = (params: Params.LoginToPhone) => {
  return request<API.LoginToPhone>("/loginToPhone", {
    method: "post",
  });
};

// 获取验证码
export const getVerifyCode = (params: Params.GetVerifyCode) => {
  return request<API.GetVerifyCode>("/getVerifyCode", {
    method: "get",
  });
};


// 获取用户
export const getUserInfo = () => {
  return request<API.GetUserInfo>("/getUserInfo", {
    method: "get",
  })
}