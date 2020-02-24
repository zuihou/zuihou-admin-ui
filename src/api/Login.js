import axiosApi from './AxiosApi.js'

const apiList = {
  getCaptcha: `/authority/anno/captcha`,
  login: {
    method: 'POST',
    url: `/authority/anno/admin/login`
  },
  getRouter: {
    url: `/authority/menu/admin/router`,
    method: 'GET'
  }
}

export default {
  getCaptcha (randomId) {
    return axiosApi({
      method: 'GET',
      url: apiList.getCaptcha + `?key=${randomId}`,
      responseType: 'arraybuffer'
    })
  },
  login (data) {
    return axiosApi({
      ...apiList.login,
      data
    })
  },
  getRouter (data) {
    return axiosApi({
      ...apiList.getRouter,
      data: data || {}
    })
  }

}
