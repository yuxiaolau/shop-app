export default {
  namespaced: true,
  state: {
    current: {
      title: '',
      desc: '',
      author: '',
      coverImg: ''
    },
    list: [],
    pages: 1,
    page: 1,
    totals: 0
  },
  mutations: {
    loadDataEnd(state, payload) {
      state.list = [
        { id: 1, name: '呼啸山庄' },
        { id: 2, name: '小王子' },
        { id: 3, name: '罗生门' }
      ]
      state.totals = 3
    },
    loadOneEnd(state, payload) {
      state.current.title = '罗生门'
      state.current.author = '芥川龙之介'
      state.current.desc = '日本著名小说。。。'
    }
  },
  getters: {
    listCount(state) {
      return state.list.length
    }
  }
}
