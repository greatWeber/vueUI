<template>
<div>
    <vu-cell title="标题" :arrow="true" value="good"></vu-cell>
    <vu-cell icon="icon-love" color="red" title="图标" :arrow="true" value="good"></vu-cell>
    <vu-cell :icon="img" iconType="img" title="图片" :arrow="true" value="good"></vu-cell>
    <vu-cell title="标题跳转" :arrow="true" value="good" :to="{name:'button'}"></vu-cell>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Cell extends Vue {
    private img :String = require('../../src/assets/logo.png')
}
</script>
    
<style lang="less" scoped>

</style>