# Picker 选择器
> 包括了: 单列选择器; 多列选择器; 地址选择器; 日期选择器。


## 综合例子

```vue
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
        ['html','css','less','vue','ts']
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
```

## 参数
| 参数        | 说明             | 类型    | 可选值 | 默认值 |
|-------------|----------------|---------|--------|--------|
| data     | 选择器的内容列表       | array  | -      |        |
|rangKey|当传入对象数组的时候，需要指定key值|string|-|-|
|mode|选择器类型|multiSelector(多列),region(地址),date(日期);|string|-|-|
|startYear|开始年份，适用于日期选择器|number,string|1990|-|
|endYear|结束年份，适用于日期选择器|number,string|2030|-|

## 方法
| method        | 说明                 | 参数           |
|---------------|--------------------|----------------|
| success | 选择器选择成功的回调       | 选择器当前选择的值 |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/picker"></qrcode>