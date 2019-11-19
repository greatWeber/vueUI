# Search 搜索框
> 常见的搜索框

## 基本用法

```vue
<template>
<div>
    <vu-search v-model="key" @search="searchHandler" @clear="clearHandler"></vu-search>
    <vu-search type="round"></vu-search>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Search extends Vue {
    private key:string = '';

    private searchHandler(val){
        console.log(val);
    }

    private clearHandler(){
        console.log('clear')
    }
}
</script>
```

## 参数
| 参数        | 说明             | 类型    | 可选值 | 默认值 |
|-------------|----------------|---------|--------|--------|
| v-model     | 输入框的值       | string  | -      |        |
| placeholder | 输入框的占位符   | string  | -      |        |
| round       | 输入框显示为圆角 | boolean | -      | false  |

## 方法
| method        | 说明                 | 参数           |
|---------------|--------------------|----------------|
| search | 点击搜索的回调       | 输入框的搜索值 |
| clear  | 清除输入框内容的回调 | -              |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/search"></qrcode>