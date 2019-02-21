import axios from 'axios'
import qs from 'qs'
import { Dialog } from 'vant'

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
})

instance.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  res => {
    if (!res.data.success) {
      return Promise.reject(res)
    }
    return res
  },
  error => {
    Dialog.alert({
      title: '警告',
      message: error.message
    })
    return Promise.reject(error)
  }
)

const post = (url, data, config = {}) => instance.post(url, data, config)

const get = (url, params, config = {}) =>
  instance.get(url, {
    params,
    ...config
  })

export default {
  install (Vue) {
    Vue.prototype.$reqGet = get
    Vue.prototype.$reqPost = post
  }
}
