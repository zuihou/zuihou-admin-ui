import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/authority/tenant/page`
  },
  update: {
    method: 'PUT',
    url: `/authority/tenant`
  },
  save: {
    method: 'POST',
    url: `/authority/tenant`
  },
  saveInit: {
    method: 'POST',
    url: `/authority/tenant/init`
  },
  remove: {
    method: 'DELETE',
    url: `/authority/tenant`
  },
  list: {
    method: 'POST',
    url: `/authority/tenant/query`
  },
  preview: {
    method: 'POST',
    url: `/authority/tenant/preview`
  },
  export: {
    method: 'POST',
    url: `/authority/tenant/export`
  },
  import: {
    method: 'POST',
    url: `/authority/tenant/import`
  }
}

export default {
  page (data) {
    return axiosApi({
      ...apiList.page,
      data
    })
  },
  save (data) {
    return axiosApi({
      ...apiList.save,
      data
    })
  },
  // 同步创建租户，防止在切换回默认数据源时，执行其他方法
  async saveInit (data) {
    return axiosApi({
      ...apiList.saveInit,
      data
    })
  },
  update (data) {
    return axiosApi({
      ...apiList.update,
      data
    })
  },
  remove (data) {
    return axiosApi({
      ...apiList.remove,
      data
    })
  },
  list (data) {
    return axiosApi({
      ...apiList.list,
      data
    })
  },
  check (code) {
    return axiosApi({
      method: 'GET',
      url: `/authority/tenant/check/${code}`
    })
  },
  preview (data) {
    return axiosApi({
      ...apiList.preview,
      data
    })
  },
  export (data) {
    return axiosApi({
      ...apiList.export,
      responseType: "blob",
      data
    })
  },
  import (data) {
    return axiosApi({
      ...apiList.import,
      data
    })
  }
}
