<template>
<div>
    <img style="width:100%;" v-preview="src" alt="">
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Preview extends Vue {
    private src: string = 'https://w.wallhaven.cc/full/j5/wallhaven-j5dvww.jpg'
}
</script>
    
<style lang="less" scoped>
</style>