# Input 输入框
> 常见的输入框

## 基本用法

```vue
<vu-input placeholder="请输入文字"></vu-input>
```

## 其他类型输入框
```vue
<p class="title">数字框</p>
<vu-input placeholder="请输入数字" type="number"></vu-input>
<p class="title">密码框</p>
<vu-input placeholder="请输入密码" type="password" v-model="psd"></vu-input>
<p class="title">文本框</p>
<vu-input placeholder="请输入文本" type="textarea"></vu-input>
```

## 参数
| 参数        | 说明           | 类型          | 可选值                                        | 默认值 |
|-------------|--------------|---------------|-----------------------------------------------|--------|
| v-model     | 输入框的值     | string,number | -                                             |        |
| placeholder | 输入框的占位符 | string        | -                                             |        |
| readonly    | 是否只读       | boolean       | -                                             | false  |
| disabled    | 是否不可用     | boolean       | -                                             | false  |
| type        | 输入框类型     | string        | text,password,number,textarea等其它原生的类型 | text   |

## 方法
| method | 说明                 | 参数  |
|--------|--------------------|-------|
| blur   | 失去焦点的回调       | event |
| change | 输入框发生变化的回调 | event |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/input"></qrcode>