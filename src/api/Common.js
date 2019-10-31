import axiosApi from './AxiosApi.js'

const apiList = {
  // 获取当前系统的所有枚举
  enums: '/gate/enums'
}

export default {
  uploadFile: `${process.env.VUE_APP_PROD_REQUEST_DOMAIN_PREFIX}${process.env.VUE_APP_BASE_API}/file/attachment/upload`,
  findPage (data) {
    return axiosApi({
      method: 'GET',
      url: apiList.findPage,
      formData: true,
      data
    })
  },
  enums () {
    return axiosApi({
      method: 'GET',
      url: apiList.enums
    })
  }
}
