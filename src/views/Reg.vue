<template>
  <div class="reg">
    <h1>注册页</h1>
    <input type="file" style="display:none;" ref="file" @change="fileSelected" />
    <ul>
      <li>
        <img
          :src="imgUrl"
          style="width:80px;max-height:80px;display:block;margin:0 auto;"
          @click="changeImg"
        />
      </li>
      <li>
        <input type="text" v-model="userName" placeholder="请输入姓名" />
      </li>
      <li>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </li>
      <li>
        <input type="password" v-model="rePassword" placeholder="请再次输入密码" />
      </li>
      <li>
        <input type="text" v-model="nickName" placeholder="请输入昵称" />
      </li>

      <li>
        <button @click="regHandle">注册</button>
      </li>
      <li>
        <router-link class="reg-link" :to="{name:'Login'}">已有账号，我要登录</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import request from '../utils/request'
import { serverUrl } from '../utils/config'
import { reg } from '../services/users'
import { setToken } from '../utils/auth'

export default {
  data() {
    return {
      userName: '',
      password: '',
      rePassword: '',
      nickName: '',
      avatar: '',
      imgUrl: require('../assets/img/upload.png')
    }
  },
  methods: {
    changeImg() {
      this.$refs.file.click()
    },
    async fileSelected(e) {
      console.log(e)
      const formData = new FormData()
      formData.append('file', e.currentTarget.files[0])
      const res = await request.post('/api/v1/common/file_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(res)
      this.avatar = res.info
      this.imgUrl = serverUrl + res.info
    },
    async regHandle() {
      if (this.userName === '' && this.password === '' && this.avatar === '') {
        alert('请输入注册信息')
        return
      }
      if (this.password !== this.rePassword) {
        alert('两次密码不一致,请重新输入')
        return
      }
      const res = await reg({
        userName: this.userName,
        password: this.password,
        nickName: this.nickName,
        avatar: this.avatar
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
    }
  }
}
</script>

<style scoped>
.reg {
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
