<template>
<el-container style="height: 100%">
<el-aside width="200px">
  <el-col :span="24" style="height: 100%">
    <!-- <h5>默认颜色</h5> -->
    <el-menu :default-active="activeIndex" router @select="toolsSelect">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span>开发工具</span>
        </template>
        <el-menu-item index="/tools/base64">Base64转码工具</el-menu-item>
        <el-menu-item index="/tools/jsonformat">json格式化</el-menu-item>
        <el-menu-item index="/tools/tomd5">MD5加密</el-menu-item>

        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-aside>
<el-main>
<router-view>
</router-view>
</el-main>
</el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/views/home/components/HelloWorld.vue'

export default {
  name: 'tools',
  components: {
  },
  data(){
  	return {
  		activeIndex: this.$route.path
  	}
  },
  methods: {
  	handleSelect (key, keyPath) {
  		console.log(key, keyPath)
  		console.log(key)
  		console.log(keyPath)
  		console.log(this.$route.path)
  	}
  }, 
  computed: {
	  // 计算属性的 getter
	}

}
</script>
