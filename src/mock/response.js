export const responseOk = (type = 'data', data) => {
  return {
    code: 200,
    [type]: data,
    msg: '成功',
  }
}