<template>
  <div class="home">
    <h1>{{$store.getters.listCount}}</h1>
    <button @click="countAdd">数据+1</button>
    <!-- <button @click="loaData">加载数据</button> -->
    <ul>
      <li v-for="item in $store.state.list" :key="item._id">
        {{ item.name }}
        <button @click="buyHandle">购买</button>
      </li>
    </ul>
    <button v-show="isShowLoadMore" @click="loaData">加载数据</button>
    <!-- 为什么会加载10条？？哪里有写？ -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <img :src="x" alt />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      x: require('../assets/img/dog.jpg'),
      isShowLoadMore: true
    }
  },
  methods: {
    ...mapMutations(['buy']), // 为什么用[]写
    countAdd() {
      this.$store.commit('plus')
    },

    loaData() {
      if (this.$store.state.pages < this.$store.state.page) {
        this.isShowLoadMore = false
        return
      }
      this.$store.dispatch('loadData', { page: this.$store.state.page })
    },
    buyHandle() {
      // this.$store.commit('buy')
      // this.buy()
    }
  }
}
</script>
