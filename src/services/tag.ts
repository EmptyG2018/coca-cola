import request from "./request";

export const getTags = () => {
  return request<API.GetTags>('/getTags', {
    method: 'get',
  })
}