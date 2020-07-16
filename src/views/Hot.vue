<template>
  <div class="hot">
    <Products></Products>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapGetters } from 'vuex'
import Products from '../components/Products'

export default {
  created() {
    // this.loadDataEnd()
  },
  components: {
    Products
  },
  computed: {
    // ...mapState('book', {
    //   current: 'current'
    // }),
    // ...mapGetters('book', ['listCount'])
  },
  methods: {
    // ...mapMutations('book', {
    //   loadDataEnd: 'loadDataEnd',
    //   loadOneEnd: 'loadOneEnd'
    // })
  }
}
</script>
