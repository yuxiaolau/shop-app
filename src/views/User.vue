<template>
  <div class="login">
    <h1>用户中心</h1>
    <button @click="logOut">退出</button>
  </div>
</template>

<script>
import { removeToken } from '../utils/auth'
export default {
  methods: {
    logOut() {
      removeToken()
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style>
</style>
