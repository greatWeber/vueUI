<template>
<div>
    <p class="title">文字框</p>
    <vu-input placeholder="请输入文字"></vu-input>
    <p class="title">数字框</p>
    <vu-input placeholder="请输入数字" type="number"></vu-input>
    <p class="title">密码框</p>
    <vu-input placeholder="请输入密码" type="password" v-model="psd"></vu-input>
    <p class="title">文本框</p>
    <vu-input placeholder="请输入文本" type="textarea"></vu-input>
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