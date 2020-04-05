import axiosApi from './AxiosApi.js'

const apiList = {
  captcha: `/oauth/anno/captcha`,
  login: `/oauth/anno/admin/login`,
  router: `/oauth/menu/admin/router`
}

export default {
  getCaptcha (randomId) {
    return axiosApi({
      method: 'GET',
      url: apiList.captcha + `?key=${randomId}`,
      responseType: 'arraybuffer',
      meta: {
        "X-isToken": false
      }
    })
  },
  login (data) {
    return axiosApi({
      method: 'POST',
      url: apiList.login,
      data
    })
  },
  getRouter (data) {
    return axiosApi({
      method: 'GET',
      url: apiList.router,
      data: data || {}
    })
  }
}
