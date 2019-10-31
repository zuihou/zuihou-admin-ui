import axiosApi from './AxiosApi.js'

const apiList = {
  findPage: {
    url: `/authority/globalUser/page`,
    method: 'GET'
  },
  save: {
    method: 'POST',
    url: `/authority/globalUser`
  },
  update: {
    method: 'PUT',
    url: `/authority/globalUser`
  },
  remove: {
    method: 'DELETE',
    url: `/authority/globalUser/remove`
  },
  check: {
    method: 'GET',
    url: `/authority/globalUser/check`
  }
}

export default {
  findPage (data) {
    return axiosApi({
      ...apiList.findPage,
      formData: true,
      data
    })
  },
  save (data) {
    return axiosApi({
      ...apiList.save,
      data: data || {}
    })
  },
  update (data) {
    return axiosApi({
      ...apiList.update,
      data: data || {}
    })
  },
  remove (data) {
    return axiosApi({
      ...apiList.remove,
      data: data || {}
    })
  },
  check (data) {
    return axiosApi({
      ...apiList.check,
      formData: true,
      data: data || {}
    })
  }
}
