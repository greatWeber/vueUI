<template>
<div>
    <p class="title">文字框</p>
    <vueUI-input placeholder="请输入文字"></vueUI-input>
    <p class="title">数字框</p>
    <vueUI-input placeholder="请输入数字" type="number"></vueUI-input>
    <p class="title">密码框</p>
    <vueUI-input placeholder="请输入密码" type="password" v-model="psd"></vueUI-input>
    <p class="title">文本框</p>
    <vueUI-input placeholder="请输入文本" type="textarea"></vueUI-input>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Input extends Vue {
    private psd: string = ''
}
</script>
    
<style lang="less" scoped>
.title {
    line-height: 0.8rem;
    background: #f5f5f5;
    text-align: left;
    padding: 0 0.2rem;
}
</style>