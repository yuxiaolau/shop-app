<template>
  <div class="login">
    <h1>登录页</h1>
    <ul>
      <li>
        <input type="text" v-model="userName" placeholder="请输入姓名" />
      </li>
      <li>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </li>
      <li>
        <button @click="loginHandle">登录</button>
      </li>
      <li>
        <router-link class="reg-link" :to="{name:'Reg'}">没有账号，我要注册</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { login } from '../services/users'
import { setToken } from '../utils/auth'

export default {
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    async loginHandle() {
      if (this.userName && this.password) {
        const res = await login({
          userName: this.userName,
          password: this.password
        })
        console.log(res)
        if (res.code === 'success') {
          setToken(res.token)
          this.$router.push({
            name: 'Home'
          })
        } else {
          alert(res.message)
        }
      } else {
        alert('请输入用户名和密码')
      }
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
.login button {
  display: block;
  margin: 0.4rem auto;
  width: 80%;
}
.reg-link {
  float: right;
  font-size: 0.8rem;
}
</style>
