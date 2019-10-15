# Badge 徽标
> 在按钮或者文字左上角显示一个红点

## 基本用法
```html
<vueUI-badge>badge小红点</vueUI-badge>
```

## 显示数字
> 当数字大于99, 转成`...`。
```html
<vueUI-badge type="number" num="99">badge小红点</vueUI-badge>
```

## 参数
| 参数 | 说明       | 类型   | 可选值       | 默认值 |
|------|----------|--------|--------------|--------|
| type | 类型       | string | point,number | point  |
| num  | 显示的数字 | number | -            | -      |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/badge"></qrcode>