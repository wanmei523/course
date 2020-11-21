//接口封装
function http(url, method, params) {
  let apiPath = 'http://gbook.com/api/v1'
  wx.request({
    url: apiPath + url,
    data: params.data ? params.data : {},
    header: {
      Accept: 'application/json'
    },
    method: method == 'POST' ? 'POST' : 'GET',
    success: (res) => {
      params.success && params.success(res.data)
    },
    fail: (err) => {
      params.fail && params.fail(err)
    }
  })
}
module.exports = {
  http
}