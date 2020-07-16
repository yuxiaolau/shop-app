import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import book from './modules/book'
import { getList } from '../services/products'

Vue.use(Vuex)

// 创建一个全局的vuex实例
const store = new Vuex.Store({
  state: {
    count: 1,
    list: [], // 数据
    pages: 1, // 总页数
    totals: 0, // 总数量
    page: 1, // 当前页
    cartCount: 0
  },
  mutations: {
    // 用来同步的改变数据  通过commit提交一个mutations
    plus(state) {
      state.count++
    },

    loadDataEnd(state, payload) {
      console.log(state)
      console.log(payload)
      state.list = [...state.list, ...payload.products]
      state.pages = payload.pages
      state.totals = payload.totalCount
      state.page++
    },
    buy(state) {
      state.cartCount++
    }
  },
  actions: {
    async loadData(context, { page }) {
      // 为什么page要加{}
      console.log(context)
      const { commit } = context // context里面有一个commit属性，这个属性是个函数
      // axios
      //   .get('http://localhost:3009/api/v1/products', {
      //     params: {
      //       page
      //     }
      //   })
      //   .then(res => {
      //     console.log(res.data)
      //     commit('loadDataEnd', res.data)
      //   })

      // getList(page).then(res => {
      //   commit('loadDataEnd', res.data)
      // })

      const res = await getList(page)
      commit('loadDataEnd', res)
    }
  },
  getters: {
    listCount(state) {
      return state.list.length
    }
  },
  modules: {
    book
  }
})

export default store
