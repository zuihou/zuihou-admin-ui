import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/tenant/globalUser/page`,
    method: 'POST'
  },
  save: {
    method: 'POST',
    url: `/tenant/globalUser`
  },
  update: {
    method: 'PUT',
    url: `/tenant/globalUser`
  },
  remove: {
    method: 'DELETE',
    url: `/tenant/globalUser/delete`
  },
  check: {
    method: 'GET',
    url: `/tenant/globalUser/check`
  },
  preview: {
    method: 'POST',
    url: `/tenant/globalUser/preview`
  },
  export: {
    method: 'POST',
    url: `/tenant/globalUser/export`
  },
  import: {
    method: 'POST',
    url: `/tenant/globalUser/import`
  },
  reset: {
    method: 'PUT',
    url: `/tenant/globalUser/reset`
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
  reset (data) {
    return axiosApi({
      ...apiList.reset,
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
