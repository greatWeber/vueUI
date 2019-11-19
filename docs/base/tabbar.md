# Tabbar 底部导航条
> 常见的底部导航条
::: Tip 提示
导航条的子项个数不应超过4个
:::

## 基本用法

```vue
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
```

## 参数
| 参数        | 说明             | 类型    | 可选值 | 默认值 |
|-------------|----------------|---------|--------|--------|
| tabList     | 导航内容列表       | array  | -      |        |

## tabList 参数
| 参数  | 说明                                     | 类型   | 可选值 | 默认值 |
|-------|----------------------------------------|--------|--------|--------|
| title | 导航标题                                 | string | -      |        |
| icon  | 导航的图标(iconfont)                     | string | -      | -      |
| href  | 导航跳转的路径,跟vue-router的:to参数一致 | object | -      | -      |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/tabbar"></qrcode>