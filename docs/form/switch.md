# Switch 开关
> 常见的开关

## 基本用法

```vue
 <vu-switch v-model="switch"></vu-switch>
```

## 不同的大小
```vue
<vu-switch size="mini"></vu-switch>
<vu-switch size="small"></vu-switch>
<vu-switch size="medium"></vu-switch>

```

## 自定义颜色
```vue
<vu-switch color="#ed8553"></vu-switch>
```

## 参数
| 参数    | 说明                              | 类型                  | 可选值      | 默认值 |
|---------|---------------------------------|-----------------------|-------------|--------|
| v-model | 开关选择的值                        | Boolean | -           |        |
| color   | 自定义颜色| String | -           |        |
| label    | 开关后面的文字                  | string                | - |   |
| size    | 不同的尺寸                  | string                | mini,small,medium | small  |



## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/switch"></qrcode>