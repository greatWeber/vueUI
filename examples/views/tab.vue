<template>
<div>
    <vu-tab :tabs="tabs" tabKey="title" @tab-click="clickHandler"></vu-tab>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Tab extends Vue {
    private tabs: Array<Object> = [
        {title:'标题一',value:1},
        {title:'标题二',value:2},
        {title:'标题三',value:3},
        {title:'标题五',value:5},
        {title:'标题六',value:6},
    ];

    private clickHandler(data:Object){
        console.log(data);
    }
}
</script>
    
<style lang="less" scoped>

</style>