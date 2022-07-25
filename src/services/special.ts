import request from "./request";

export const getSpecials = () => {
  return request<API.GetSpecials>('/getSpecials', {
    method: 'get',
  })
}