import commonApi from '@/api/Common.js'

export const loadEnums = (codes, enums = {}, service = 'authority') => {
  if (typeof (codes) === 'string') {
    codes = [codes]
  }

  if (codes && codes.length > 0) {
    commonApi.enums({ codes: codes }, service).then(response => {
      const res = response.data
      for (const code of codes) {
        enums[code] = res.data[code]
      }
    })
  }
}

export const initEnums = (codes, enums = {}) => {
  loadEnums(codes, enums, 'authority')
}

export const initFileEnums = (codes, enums = {}) => {
  loadEnums(codes, enums, 'file')
}
export const initMsgsEnums = (codes, enums = {}) => {
  loadEnums(codes, enums, 'msgs')
}
