import { get, post, del } from '../utils/request'

export function loadCart() {
  return get('/api/v1/shop_carts')
}

export function addToCart(productId, quantity = 1) {
  return post('/api/v1/shop_carts', {
    product: productId,
    quantity
  })
}

export function removeFromCart(cartId) {
  return del('/api/v1/shop_carts/' + cartId)
}
