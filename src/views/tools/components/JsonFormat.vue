<template>
  <div>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="请输入内容" v-model="textarea">
    </el-input>

    
    <json-viewer
      :value="JsonData"
      :expand-depth=5
      copyable
      boxed
      sort
      style="margin-top: 20px;text-align: left;"></json-viewer>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/views/home/components/HelloWorld.vue'
import JsonViewer from 'vue-json-viewer'

let Base64 = require('js-base64').Base64;
export default {
  name: 'base64',
  components: {
    JsonViewer
  },
  data () {
    return {
      textarea: "",
      JsonTab: 2
    }
  },
  computed: {
    // 计算属性的 getter
    TextareaReturn: function () {
      // `this` 指向 vm 实例
      return JSON.stringify(this.textarea, null,this.JsonTab);
    },
    JsonData: function () {
      try {
          var obj=JSON.parse(this.textarea);
          if(typeof obj == 'object' && obj ){
              return obj;
          }else{
              return "非标准字符串";
          }

      } catch(e) {
          console.log('error：'+this.textarea+'!!!'+e);
          return "非标准字符串";
      }
    }
  }
}
</script>
<style lang="stylus">
  .span-text
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
</style>