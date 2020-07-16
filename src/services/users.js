import { post } from '../utils/request'

export function login(data) {
  return post('/api/v1/auth/login', data)
}

export function reg(data) {
  return post('/api/v1/auth/reg', data)
}
