<template>
  <div class="about">
    <h1>This is an Hot page</h1>
    {{listCount}}
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  created() {
    this.loadDataEnd()
  },
  computed: {
    ...mapState('book', {
      current: 'current'
    }),
    ...mapGetters('book', ['listCount'])
  },
  methods: {
    ...mapMutations('book', {
      loadDataEnd: 'loadDataEnd',
      loadOneEnd: 'loadOneEnd'
    })
  }
}
</script>
