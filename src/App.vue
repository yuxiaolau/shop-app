<template>
  <div class="container">
    <div class="header">
      <router-link :to="{ name: 'Home' }"
        ><i class="fa fa-home returnBtn"></i
      ></router-link>
      芒果商城
    </div>
    <router-view class="content"></router-view>
    <div v-show="isShowFooter" class="footer">
      <div
        :class="currentIndex == 0 ? 'nav active' : 'nav'"
        @click="navTo('Home', 0)"
      >
        <i class="fa fa-home"></i>
        <span>首页</span>
      </div>
      <div
        :class="currentIndex == 1 ? 'nav active' : 'nav'"
        @click="navTo('Hot', 1)"
      >
        <i class="fa fa-fire"></i>
        <span>热卖</span>
      </div>
      <div
        :class="currentIndex == 2 ? 'nav active' : 'nav'"
        style="position:relative;"
        @click="navTo('Cart', 2)"
      >
        <span v-show="$store.state.cartCount > 0" class="dot">
          {{ $store.state.cartCount }}
        </span>
        <i class="fa fa-shopping-cart"></i>
        <span>购物车</span>
      </div>
      <div
        :class="currentIndex == 3 ? 'nav active' : 'nav'"
        @click="navTo('User', 3)"
      >
        <i class="fa fa-user"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isShowFooter: true
    }
  },
  watch: {
    $route(v) {
      console.log(v)
      if (v.meta.isHideFooter) {
        this.isShowFooter = false
      } else {
        this.isShowFooter = true
      }
    }
  },
  methods: {
    navTo(routeName, index) {
      this.currentIndex = index
      this.$router
        .push({
          name: routeName
        })
        .catch(() => {})
    }
  }
}
</script>
>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.header {
  height: 40px;
  text-align: center;
  background: deeppink;
  color: white;
  line-height: 40px;
  font-weight: bolder;
}
.container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
.footer {
  height: 50px;
  /* background: palevioletred; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
img {
  max-width: 100%;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav i {
  font-size: 1.4rem;
}
.nav span {
  font-size: 0.6rem;
}
.nav.active {
  color: deeppink;
}
.dot {
  background-color: deeppink;
  color: white;
  border-radius: 50%;
  padding: 0.2rem;
  position: relative;
  top: 12px;
  left: 8px;
  width: 1rem;
  height: 1rem;
  text-align: center;
}
.returnBtn {
  float: left;
  font-size: 2rem;
  margin-left: 0.5rem;
  color: white;
}
</style>
