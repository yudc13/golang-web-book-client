import axios from 'axios'
import axiosConfig from '@/utils/axiosConfig'

export interface Response<T> {
  code: number
  data: T
  msg: string
}

const service = axios.create(axiosConfig)

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.data) {
    const formData = new FormData()
    for (const key in config.data) {
      formData.append(key, config.data[key])
    }
    config.data = formData
  }
  return config
})

service.interceptors.response.use(
  response => {
    const { data } = response
    if (data.code === 0) {
      return Promise.resolve(data)
    }
    return Promise.reject(data.msg)
  },
  (error: Error) => {
    return Promise.reject(error.message)
  }
)

export default service
