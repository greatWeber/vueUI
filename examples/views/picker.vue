<template>
<div>
    <p>
        <vu-picker :data="data1" @success="successCb1">
            <div class="flex space-between">
                <span>数组选择器</span>
                <span class="picker">{{picker1}}</span>
            </div>
        </vu-picker>
    </p>
    <p>
        <vu-picker :data="data2" range-key="text" @success="successCb2">
            <div class="flex space-between">
                <span>对象数组选择器</span>
                <span class="picker">{{picker2}}</span>
            </div>
        </vu-picker>
    </p>
    <p>
        <vu-picker mode="multiSelector" :data="data3"  @success="successCb3">
            <div class="flex space-between">
                <span>多列数组选择器</span>
                <span class="picker">{{picker3}}</span>
            </div>
        </vu-picker>
    </p>
    <p>
        <vu-picker mode="region"  @success="successCb4">
            <div class="flex space-between">
                <span>地址选择器</span>
                <span class="picker">{{picker4}}</span>
            </div>
        </vu-picker>
    </p>
    <p>
        <vu-picker mode="date"   @success="successCb5">
            <div class="flex space-between">
                <span>日期选择器</span>
                <span class="picker">{{picker5}}</span>
            </div>
        </vu-picker>
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

    private picker1 :string = '';
    private picker2 :string = '';
    private picker3 :string = '';
    private picker4 :string = '';
    private picker5 :string = '';

    private successCb1(data){
        console.log(data);
        this.picker1 = data;
    }

    private successCb2(data){
        console.log(data);
        this.picker2 = data.text;
    }

    private successCb3(data){
        console.log(data);
        this.picker3 = data.join('-');
    }

    private successCb4(data){
        console.log(data);
        let rs = [];
        data.forEach(item=>{
            rs.push(item.text);
        })
        this.picker4 = rs.join('-');
    }

    private successCb5(data){
        console.log(data);
        this.picker5 = data.join('-');
    }
}
</script>
    
<style lang="less" scoped>
p {
    padding: 0.2rem ;
    border-bottom: 1px solid #eee; 
}

.picker {
    color: #539BED;
}
</style>