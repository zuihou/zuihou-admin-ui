import axiosApi from './AxiosApi.js'

const apiList = {
  // 获取当前系统的所有枚举
  enums: {
    method: 'GET',
    url: `/oauth/enums`
  }
}

export default {
  uploadFile: `${process.env.VUE_APP_PROD_REQUEST_DOMAIN_PREFIX}${process.env.VUE_APP_BASE_API}/file/attachment/upload`,
  enums (data) {
    return axiosApi({
      ...apiList.enums,
      data
    })
  }
}
