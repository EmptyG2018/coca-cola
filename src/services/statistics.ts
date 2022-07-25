import request from "./request";

export const getTimes = () => {
  return request<API.GetTimes>('/getTimes', {
    method: 'get',
  })
}