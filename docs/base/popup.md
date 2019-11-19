# Popup 弹层
> 常见的弹层

## 基本用法
::: tip
提供了几种常见的弹层显示动画：fade(淡入淡出); left(左边进入); right(右边进入); top(顶边进入); bottom(低边进入);

:::
```vue
<template>
<div>
    <vu-popup :showPopup.sync="showPopup" position="right"></vu-popup>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Popup extends Vue {
    private showPopup: boolean = true;
}
</script>
```

## 参数
| 参数           | 说明             | 类型    | 可选值                     | 默认值 |
|----------------|----------------|---------|----------------------------|--------|
| position       | 动画效果         | string  | fade,left,right,top,bottom | fade   |
| showClose      | 是否显示关闭按钮 | boolean | -                          | true   |
| showPopup:sync | 控制弹层显示隐藏 | boolean | -                          | false  |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/popup"></qrcode>