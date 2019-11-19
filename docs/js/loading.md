# Loading 加载
> 用js方式调用加载

::: tip 说明
加载动画是纯css实现的，参考了`load-awesome`这个项目[传送门](https://github.danielcardoso.net/load-awesome/animations.html).
目前实现了六种效果: ballSpanFade; ballTrianglePath; lineScale; lineSpin; pacman;squareJellyBox
:::
## 基本用法

```js
this.$loading.show('',type);
```

## show方法参数
| 参数        | 说明             | 类型    | 可选值 | 默认值 |
|-------------|----------------|---------|--------|--------|
| title     | 加载的标题       | string  | -      |    加载中...    |
| type | 加载的类型| string| -      |    ballSpanFade    |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/loading"></qrcode>