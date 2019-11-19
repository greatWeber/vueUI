#  Swiper 轮播图组件
> 常见的轮播图组件


## 基本用法

```vue
<vu-swiper :data="imgArr">
    <span slot-scope="swiper">{{swiper}}</span>
</vu-swiper>
```

## 默认插槽 slot
> 提供了一个插槽，放在image标签后面

## 参数
| 参数      | 说明           | 类型    | 可选值              | 默认值   |
|-----------|--------------|---------|---------------------|----------|
| data      | 图片列表       | array   | -                   |          |
| auto      | 自动滚动       | boolean | -                   | false    |
| time      | 滚动的间隔时间 | number  |                     | 2000(ms) |
| showPoint | 是否显示小圆点 | boolean |                     | true     |
| fit       | 图片的裁剪类型 | string  | 参考原生的objectFit | cover    |

## 方法
| method        | 说明                       | 参数 |
|---------------|--------------------------|------|
| transitionend | 图片滚动到下一张之前的回调 |      |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/swiper"></qrcode>