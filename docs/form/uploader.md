#  Uploader 上传组件
> 上传图片的组件

::: tip 提示
该组件没有集成ajax请求，所以请求是需要手动写的，这对于不同的项目来说，优点在于定制性强。
:::

## 基本用法

```vue
<vu-uploader @uploaderHandler="uploaderHandler" v-model="imgList"></vu-uploader>
```

## 参数
| 参数        | 说明             | 类型    | 可选值 | 默认值 |
|-------------|----------------|---------|--------|--------|
| v-model     | 上传图片的列表       | array  | -      |        |
| accept | 允许上传的图片类型   | string  | 参考原生accept类型      |  *      |
| limit       | 最大图片容量上传限制 | number |       | 5(单位m)  |

## 方法
| method          | 说明                                          | 参数                        |
|-----------------|---------------------------------------------|---------------------------|
| uploaderHandler | 点击上传文件后的回调，可以在这里自定义业务请求 | 所选中的files值(包含base64) |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/uploader"></qrcode>