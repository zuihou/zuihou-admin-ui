import axiosApi from './AxiosApi.js'

const apiList = {
  findTenantPage: `/authority/tenant/page`,
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
    url: `/authority/tenant/remove`
  },
  list: {
    method: 'GET',
    url: `/authority/tenant`
  }
}

export default {
  findTenantPage (data) {
    return axiosApi({
      method: 'GET',
      url: apiList.findTenantPage,
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
  }
}
