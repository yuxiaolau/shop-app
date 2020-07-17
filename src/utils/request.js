import axios from 'axios'
import { getToken } from './auth'

const instance = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:3009'
})

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // console.log('请求执行之前')
    config.headers.authorization = 'bearer ' + getToken()
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('请求执行完成')
    return response.data
  },
  function(error) {
    if (error.response.status === 401) {
      window.location.href = '/#/login'
    }
    // if (error.message.indexOf('timeout') > -1) {
    //   alert('请求超时，请重试')
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instance

export function get(url, params) {
  return instance.get(url, {
    params
  })
}

export function post(url, data) {
  return instance.post(url, data)
}

export function put(url, data) {
  return instance.put(url, data)
}

export function del(url) {
  return instance.delete(url)
}
