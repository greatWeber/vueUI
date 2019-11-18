<template>
<div id="app">
    <router-view/>
  </div>
</template>
  
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
  
@Component
export default class App extends Vue {

}
</script>
  
<style lang="less" >
.title {
    font-size: 0.38rem;
    color: #666;
    line-height: 2;
    padding-left: 0.2rem;
    background: #f5f5f5;
}
body {
  background: #f5f5f5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background: #fff;
}
</style>

