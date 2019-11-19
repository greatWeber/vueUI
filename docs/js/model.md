# Model 弹窗提示
> 用js方式调用弹窗提示

## 基本用法

```js
this.$modal.message('哈哈哈, 你打开的是message').then(data=>{
    this.$toast.text('点击确定');
},()=>{
    this.$toast.text('点击取消');
})

```

## 带input 输入框
```js
this.$modal.input('请输入内容').then(data=>{
    console.log(data);
    this.$toast.text('点击确定');
},()=>{
    this.$toast.text('点击取消');
})

```

## 自定义的弹窗
```js
this.$modal.dispose({
    title:'自定义',
    value:'这个是自定义弹窗',
    type:'message',
    cancelText:'cancel',
    confirmText:'confirm'
}).then(data=>{
    this.$toast.text('点击确定');
},()=>{
    this.$toast.text('点击取消');
})

```

## 自定义弹窗的参数
| 参数        | 说明           | 类型   | 可选值        | 默认值  |
|-------------|--------------|--------|---------------|---------|
| title       | 标题           | string | -             |         |
| value       | 弹窗提示的内容 | string | -             |         |
| type        | 显示的类型     | string | message,input | message |
| cancelText  | 取消按钮的文本 | string | -             |         |
| confirmText | 确认按钮的文本 | string | -             |         |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/model"></qrcode>