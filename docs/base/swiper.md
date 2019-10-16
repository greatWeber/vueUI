# Swiper 轮播图
> 常见的轮播图

## 基本用法
```vue
<template>
    <vueUI-swiper :data="imgArr"></vueUI-swiper>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Swiper extends Vue {
    private imgArr: Array<any> =[
        'https://w.wallhaven.cc/full/j5/wallhaven-j5dvww.jpg',
        'https://w.wallhaven.cc/full/13/wallhaven-132lqw.png'
    ];
}
</script>
```

## slot 插槽
> 有一个默认插槽，放在遍历里面，作用域是所遍历的图片数组的项。
```vue
<vueUI-swiper :data="imgArr">
    <span slot-scope="swiper">{{swiper}}</span>
</vueUI-swiper>
```

## 参数
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|data|图片数组|array|-|-|
|auto|是否自动滚动|boolean|-|false|
|time|滚动间隔的时间(ms)|number|-|2000|
|showPoint|是否显示小圆点|boolean|-|ture|
|Class|自定义的class(最外层)|string|-|-|
|fit|图片裁剪类型|string|contain,cover,fill,none,scale-down|cover|

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/swiper"></qrcode>