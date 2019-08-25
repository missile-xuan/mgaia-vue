<template>
  <div>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="请输入内容" v-model="textarea">
    </el-input>
    <el-row :gutter="20" style="margin-top: 20px;margin-bottom: 20px;">
      <el-col :span="24">
        <el-radio-group v-model="letter" size="small">
          <el-radio label="lower" border>小写字母</el-radio>
          <el-radio label="upper" border>大写字母</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="MD5密文" v-model="TextareaReturn">
    </el-input>
  </div>
</template>
<script>
// @ is an alias to /src
import md5 from 'js-md5'

export default {
  name: 'tomd5',
  components: {},
  data () {
    return {
      textarea: '',
      letter: 'lower'
    }
  },
  computed: {
    // 计算属性的 getter
    TextareaReturn: function () {
      // `this` 指向 vm 实例
      if(this.textarea===""){
        return this.textarea
      }else{
        if (this.letter==="lower") {
          return md5(this.textarea)
        }else{
          return md5(this.textarea).toUpperCase()
        }
        
      }
    }
  }
}

</script>
