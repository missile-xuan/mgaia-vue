<template>
  <div>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="请输入内容" v-model="textarea">
    </el-input>
    <el-row :gutter="20" style="margin-top: 20px;margin-bottom: 20px;">
      <el-col :span="24">
        <el-radio-group v-model="base64" size="small">
          <el-radio label="to-base64" border>BASE64编码</el-radio>
          <el-radio label="base64-to" border>BASE64解码</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="请输入内容" v-model="TextareaReturn">
    </el-input>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/views/home/components/HelloWorld.vue'

let Base64 = require('js-base64').Base64;
export default {
  name: 'base64',
  components: {},
  data () {
    return {
      textarea: '',
      base64: 'to-base64'
    }
  },
  computed: {
    // 计算属性的 getter
    TextareaReturn: function () {
      // `this` 指向 vm 实例
      if (this.base64 === 'to-base64') {
      	return Base64.encode(this.textarea);
      } else { 
      	return Base64.decode(this.textarea);
      }
    }
  }
}

</script>
