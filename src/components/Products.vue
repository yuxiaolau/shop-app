<template>
  <ul>
    <li v-for="item in list" :key="item._id">
      {{item.name}}
      <button @click="buyHandle(item)">购买</button>
    </li>
  </ul>
</template>

<script>
import { getList } from '../services/products'
import { addToCart } from '../services/shopcarts'

export default {
  data() {
    return {
      list: []
    }
  },
  async created() {
    const res = await getList()
    this.list = res.products
  },
  methods: {
    async buyHandle(p) {
      console.log(p)
      const res = await addToCart(p._id)
      console.log(res)
    }
  }
}
</script>

<style>
</style>
