# Cell 列表项
> 模拟常用的列表项

## 基本用法
```html
<vueUI-cell title="这是列表项"></vueUI-cell>
```

## 显示箭头和右边的值
```html
<vueUI-cell title="这是列表项" value="1" :arrow="true"></vueUI-cell>
```

## 左边显示图标(图片)
> 图标的类型有: icon / img
```html
<vueUI-cell title="这是列表项" value="1" :arrow="true" icon="icon-success" iconType="icon"></vueUI-cell>
```

## 点击跳转
> 写法跟`vue-router`的:to方法一样。
```html
<vueUI-cell title="标题跳转" :arrow="true" value="good" :to="{name:'button'}"></vueUI-cell>
```

## 参数
| 参数     | 说明                                       | 类型    | 可选值   | 默认值 |
|----------|------------------------------------------|---------|----------|--------|
| title    | 标题，显示在左边                            | string  | -        | -      |
| value    | 值，显示在右边                              | string  | -        | -      |
| iconType | 图标的类型                                  | string  | icon,img | icon   |
| icon     | 图标的值，可以是类名或者图片地址或者base64    | string  | -        | -      |
| arrow    | 是否显示箭头                                | boolean | -        | -      |
| color    | icon图标的颜色，只有当iconType=icon时才有效  | string  | -        | -      |
| to       | 跳转的地址对象(vue-router)                  | object  | -        | -      |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/cell"></qrcode>