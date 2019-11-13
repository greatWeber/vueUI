<template>
<div>
    <vu-steps :list="list" :status="status"></vu-steps>
    <vu-steps :list="list" :status="status" dir="vertical"></vu-steps>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Steps extends Vue {
    private list: Array<Object> = [
        {
            title:'步骤一',
            info:'这是步骤一'
        },
        {
            title:'步骤二',
            info:'这是步骤二'
        },
        {
            title:'步骤三',
            info:'这是步骤三'
        },
        {
            title:'步骤四',
            info:'这是步骤四'
        },
        {
            title:'步骤五',
            info:'这是步骤五'
        }
    ];
    private status:number = 1;
}
</script>
    
<style lang="less" scoped>
</style>