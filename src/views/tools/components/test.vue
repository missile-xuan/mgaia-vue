<template>
  <div>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="请输入内容" v-model="textarea">
    </el-input>
    <el-button type="primary" @click="getapi">获取</el-button>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/views/home/components/HelloWorld.vue'

export default {
  name: 'test',
  components: {},
  data () {
    return {
      textarea: '',
    }
  },
  computed: {
    // 计算属性的 getter
    
  },
  methods:{
    getapi: function(){
      this.axios.get('https://www.apiopen.top/weatherApi?city=杭州').then((response) => {
        this.textarea=JSON.stringify(response.data);
        console.log(response.data)
      })
    }
  }
}

</script>
