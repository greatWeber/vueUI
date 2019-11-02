<template>
<div>
    <p>
        <vu-picker :data="data1" @success="successCb">数组选择器</vu-picker>
    </p>
    <p>
        <vu-picker :data="data2" range-key="text" @success="successCb">对象数组选择器</vu-picker>
    </p>
    <p>
        <vu-picker mode="multiSelector" :data="data3"  @success="successCb">多列数组选择器</vu-picker>
    </p>
    <p>
        <vu-picker mode="region"  @success="successCb">地址选择器</vu-picker>
    </p>
    <p>
        <vu-picker mode="date"   @success="successCb">日期选择器</vu-picker>
    </p>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Picker extends Vue {

    private data1: Array<any> = ['红','蓝'];
    private data2:Array<any> = [
        {text:'html',value:1},
        {text:'css',value:2}, 
        {text:'js',value:3},
        {text:'vue',value:4},
        {text:'mpvue',value:5},
    ];
    private data3:Array<any> = [
        ['js','vue','ts'],
        ['html','css','less']
    ];

    successCb(data){
        console.log(data);
    }
}
</script>
    
<style lang="less" scoped>
p {
    padding: 0.2rem 0;
    border-bottom: 1px solid #eee; 
}
</style>