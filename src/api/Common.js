import axiosApi from './AxiosApi.js'

const apiList = {
  // 获取当前系统的所有枚举
  enums: {
    authority: {
      method: 'GET',
      url: `/authority/enums`
    },
    msgs: {
      method: 'GET',
      url: `/msgs/enums`
    },
    file: {
      method: 'GET',
      url: `/file/enums`
    }
  }
}

export default {
  uploadFile: `${process.env.VUE_APP_PROD_REQUEST_DOMAIN_PREFIX}${process.env.VUE_APP_BASE_API}/file/attachment/upload`,
  findPage (data) {
    return axiosApi({
      method: 'GET',
      url: apiList.findPage,
      data
    })
  },
  enums (data, service = 'authority') {
    return axiosApi({
      ...apiList.enums[service],
      data
    })
  }
}
