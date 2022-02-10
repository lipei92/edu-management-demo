<template>
  <div id="app">
    <h1>学习demo</h1>
    <!-- 根级路由出口 -->
    <router-view />
    <div class="test">hhh</div>
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
<style lang="scss" scoped>
// @import "~@/styles/variables.scss";
.test{
  color: $danger-color;
}
</style>
