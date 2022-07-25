import request from "./request";

export const getProjects = () => {
  return request<API.GetProjects>('/getProjects', {
    method: 'get',
  })
}