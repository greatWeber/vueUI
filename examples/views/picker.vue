<template>
<div>
    <p>
        <vueUI-picker :data="data1" @success="successCb">数组选择器</vueUI-picker>
    </p>
    <p>
        <vueUI-picker :data="data2" range-key="text" @success="successCb">对象数组选择器</vueUI-picker>
    </p>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Picker extends Vue {

    private data1: Array<any> = ['红','蓝','绿','紫','白','黑'];
    private data2:Array<any> = [
        {text:'html',value:1},
        {text:'css',value:2},
        {text:'js',value:3},
        {text:'vue',value:4},
        {text:'mpvue',value:5},
    ]

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