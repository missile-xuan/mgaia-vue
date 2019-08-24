<template>
  <el-container id="app" class="background-color-base">

    <!-- 头部 -->
    <el-header class="header">
      <el-menu class="el-menu-demo" :default-active="activeIndex" mode="horizontal" router=true @select="handleSelect">
        <el-menu-item index="1" route="/">首页</el-menu-item>
        <el-menu-item index="2" route="/about">工具</el-menu-item>
        <el-menu-item index="3">ToDoList</el-menu-item>
      </el-menu>
    </el-header>

    <!-- 内容 -->
    <el-main>
      <router-view>
      </router-view>
    </el-main>
  </el-container>
</template>
<script>
   export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%

</style>
