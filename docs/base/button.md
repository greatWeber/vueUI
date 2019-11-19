# Button 按钮
> 常用的操作按钮。

## 基本用法
```html
<vu-button>基本按钮</vu-button>
```

## 不同尺寸
> size: mini, small, medium。默认是 mini。
```html
<vu-button  size="mini">mini按钮</vu-button>
<vu-button  size="small">small按钮</vu-button>
<vu-button  size="medium">medium按钮</vu-button>
```

## 不同类型
> type: primary, success, info, warning, danger。默认是空白背景。
```html
<vu-button  type="primary">primary按钮</vu-button>
<vu-button  type="success">success按钮</vu-button>
<vu-button  type="info">info按钮</vu-button>
<vu-button  type="warning">warning按钮</vu-button>
<vu-button  type="danger">danger按钮</vu-button>
```

## 椭圆按钮
```html
<vu-button round="true">椭圆按钮</vu-button>
```

## 带加载动画的按钮
```html
<vu-button loading="true">椭圆按钮</vu-button>
```

## 朴素按钮
```html
<vu-button plain="true">朴素按钮</vu-button>
```

## 参数
| 参数    | 说明           | 类型    | 可选值                                  | 默认值 |
|---------|--------------|---------|-----------------------------------------|--------|
| size    | 尺寸           | string  | mini, small, medium                     | mini   |
| type    | 类型           | string  | primary, success, info, warning, danger | -      |
| round   | 是否椭圆       | boolean | -                                       | false  |
| loading | 是否带加载动画 | boolean | -                                       | false  |
| plain   | 是否朴素按钮   | boolean | -                                       | false  |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/button"></qrcode>