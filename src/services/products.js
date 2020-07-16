import { get } from '../utils/request'

export function getList(page) {
  return get('/api/v1/products', { page })
}

export function getOne(id) {
  return get('/api/v1/products' + id)
}
