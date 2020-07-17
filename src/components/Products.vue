<template>
  <!-- <ul>
    <li v-for="item in list" :key="item._id">
      {{item.name}}
      <button @click="buyHandle(item)">购买</button>
    </li>
  </ul> -->
  <div>
    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      > -->
    <van-card
      v-for="item in list"
      :key="item._id"
      :num="item.quantity"
      :price="item.price"
      :title="item.name"
      :thumb="item.coverImg | resetImg"
    >
      <template #footer>
        <van-button @click="buyHandle(item)" type="danger" size="mini"
          >购买</van-button
        >
      </template>
    </van-card>
    <!-- </van-list>
    </van-pull-refresh> -->
  </div>
</template>

<script>
import { getList } from '../services/products'
import { addToCart } from '../services/shopcarts'

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
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
    // onLoad() {
    //   setTimeout(() => {
    //     if (this.refreshing) {
    //       this.list = []
    //       this.refreshing = false
    //     }

    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     this.loading = false

    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // },
    // onRefresh() {
    //   // 清空列表数据
    //   this.finished = false

    //   // 重新加载数据
    //   // 将 loading 设置为 true，表示处于加载状态
    //   this.loading = true
    //   this.onLoad()
    // }
  }
}
</script>

<style></style>
