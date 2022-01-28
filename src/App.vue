<template>
  <div id="app">
    <h1>学习demo</h1>
    <!-- 根级路由出口 -->
    <router-view />
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type='primary'>主要按钮</el-button>
      <el-button type='success'>成功按钮</el-button>
      <el-button type='info'>信息按钮</el-button>
      <el-button type='warning'>警告按钮</el-button>
      <el-button type='danger'>危险按钮</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 2,
      b: 'cc'
    }
  },
  methods: {
    test () {
      console.log(this.a)
    }
  }
})
</script>
<style lang="scss" scoped></style>
