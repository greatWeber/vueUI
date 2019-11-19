# Radio 单选框
> 常见的搜索框

## 基本用法

```vue
<vu-radio  label="1" type="row">单选按钮</vu-radio>
```

## 单选框组 radio-group
```vue
<vu-radio-group v-model="radio" @change="changeHandler">
    <vu-radio  label="1" type="row">单选按钮</vu-radio>
    <vu-radio  label="2" type="row">单选按钮</vu-radio>
</vu-radio-group>

```

## 参数
| 参数        | 说明             | 类型    | 可选值 | 默认值 |
|-------------|----------------|---------|--------|--------|
| v-model     | 单选框组的值       | String,Number,Boolean  | -      |        |
| label | radio-group每个子radio对应的值   | String,Number,Boolean  | -      |        |
| type       | 单选框的排列方式 | string | row, column      | column  |

## 方法
| method        | 说明                 | 参数           |
|---------------|--------------------|----------------|
| change | 选择单选框后的回调       | 所选中的label值 |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/radio"></qrcode>