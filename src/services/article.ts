import request from "./request";

export const getArticles = () => {
  return request<API.GetArticles>('/getArticles', {
    method: 'get',
  })
}