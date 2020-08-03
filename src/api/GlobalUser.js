import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/authority/globalUser/page`,
    method: 'POST'
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
    url: `/authority/globalUser/delete`
  },
  check: {
    method: 'GET',
    url: `/authority/globalUser/check`
  },
  preview: {
    method: 'POST',
    url: `/authority/globalUser/preview`
  },
  export: {
    method: 'POST',
    url: `/authority/globalUser/export`
  },
  import: {
    method: 'POST',
    url: `/authority/globalUser/import`
  },
  updatePassword: {
    method: 'PUT',
    url: `/authority/globalUser/password`
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
  updatePassword (data) {
    return axiosApi({
      ...apiList.updatePassword,
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
