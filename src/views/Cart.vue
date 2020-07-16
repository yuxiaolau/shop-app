<template>
  <div class="login">
    <h1>购物车</h1>
    <p v-for="item in carts" :key="item._id">{{item.product.name}}*{{item.quantity}}</p>
  </div>
</template>

<script>
import { loadCart } from '../services/shopcarts'
export default {
  data() {
    return {
      carts: []
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const res = await loadCart()
      console.log(res)
      this.carts = res
    }
  }
}
</script>

<style>
</style>
