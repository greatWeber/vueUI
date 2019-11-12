<template>
<div>
    <vu-tabbar :tabList="list"></vu-tabbar>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Tabbar extends Vue {
    private list: Array<Object> = [
        {
            title:'首页',
            icon:'icon-home',
            href:''
        },
        {
            title:'搜索',
            icon:'icon-search',
            href:''
        },
        {
            title:'个人',
            icon:'icon-user',
            href:''
        }
    ];

}
</script>
    
<style lang="less" scoped>
</style>