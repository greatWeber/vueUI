# Toast 文本提示
> 用js方式调用文本提示

## 基本用法

```js
this.$toast.success('修改成功!').then(data=>console.log('修改成功'));

this.$toast.error('修改失败!').then(data=>console.log('修改失败'));

this.$toast.info('修改成功!').then(data=>console.log('修改成功'));

this.$toast.text('修改成功!').then(data=>console.log('修改成功'));

```

## 参数
| 参数  | 说明           | 类型   | 可选值 | 默认值 |
|-------|--------------|--------|--------|--------|
| title | 提示的标题     | string | -      |        |
| time  | 多少毫秒后隐藏 | number | -      | 2000   |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/toast"></qrcode>