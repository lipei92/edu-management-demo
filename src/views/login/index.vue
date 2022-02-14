<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      label-position="top"
      label-width="80px"
      class="login-form"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'loginIndex',
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
})
</script>
<style lang="scss" scoped>
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form{
    width: 300px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    .login-btn{
      width: 100%;
    }
  }
}
</style>
