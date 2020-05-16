# Tab 选项卡
> 常见的选项卡

## 基本用法
::: tip
当选项卡的内容<=3个的时候，采用`flex`等分排列; 当>3的时候，显示下拉按钮，点击显示更多
:::
```vue
<template>
    <vu-tab :tabs="tabs" @tab-click="clickHandler"></vu-tab>
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
        console.log(data); //{index:i,value:string}
    }
}

</script>
    
```

## 指定标签数组的key值
> 当标签数组是对象数组时，可以通过`tabKey`指定key值

```vue
<vu-tab :tabs="tabs" tabKey="title" @tab-click="clickHandler"></vu-tab>
```

## 指定当前高亮的标签
> 可以通过`tabIndex`来指定当前第几个标签高亮

```vue
<vu-tab :tabs="tabs" tabKey="title" tabIndex="1" @tab-click="clickHandler"></vu-tab>
```
## 参数
| 参数     | 说明            | 类型   | 可选值 | 默认值 |
|----------|---------------|--------|--------|--------|
| tabs     | 标签数组        | array  | -      | -      |
| tabIndex | 指定标签索引    | number | -      | 0      |
| tabKey   | 标签数组的key值 | string | -      | 空     |

## 方法
| method    | 说明                 | 返回值  |
|-----------|--------------------|---------|
| tab-click | 点击切换标签后的回调 | tabs[i] |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/tab"></qrcode>
