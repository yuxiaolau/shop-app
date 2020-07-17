<template>
  <div class="cart">
    <h1>购物车</h1>
    <!-- <p v-for="item in carts" :key="item._id">
      {{ item.product.name }}*{{ item.quantity }}
    </p> -->
    <div class="cart-item" v-for="item in carts" :key="item._id">
      <van-checkbox v-model="item.checked" style="width:30px;"></van-checkbox>
      <van-card
        :num="item.quantity"
        :price="item.product.price"
        :title="item.product.name"
        :thumb="item.product.coverImg | resetImg"
        style="flex: 1"
      >
        <template #footer>
          <van-button type="danger" size="mini" @click="delOne(item._id)"
            >删除</van-button
          >
        </template>
      </van-card>
    </div>

    <van-submit-bar :price="sumPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { loadCart, removeFromCart } from '../services/shopcarts'

export default {
  data() {
    return {
      carts: []
      // checkAll: false
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    checkAll: {
      set(v) {
        this.carts.forEach(item => (item.checked = v))
      },
      get() {
        return (
          this.carts.filter(item => item.checked).length === this.carts.length
        )
      }
    },
    sumPrice() {
      return (
        this.carts
          .filter(item => item.checked)
          .reduce((pre, cur) => {
            return pre + cur.quantity * cur.product.price
          }, 0) * 100
      )
    }
  },
  methods: {
    async loadData() {
      const res = await loadCart()
      console.log(res)
      this.carts = res.map(item => {
        return { ...item, checked: false }
      })
    },
    onSubmit() {},
    delOne(id) {
      Dialog.confirm({
        title: '提示',
        message: '是否确认删除此项?'
      })
        .then(async () => {
          // on confirm
          await removeFromCart(id)
          this.loadData()
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style>
.cart-item {
  display: flex;
  justify-content: center;
}
</style>
