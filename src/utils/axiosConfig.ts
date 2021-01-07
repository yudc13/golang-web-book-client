import Qs from 'qs'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  // 请求后的数据处理
  transformResponse: [
    (data: AxiosResponse) => {
      return data
    }
  ],
  // 查询对象序列化
  paramsSerializer: (params: any) => {
    return Qs.stringify(params)
  },
  // 必须手动加上，否则返回的格式是一个string
  responseType: 'json',
  // 超时时长
  timeout: 100000,
  // 跨域是否带Token
  withCredentials: true
}

export default axiosConfig
