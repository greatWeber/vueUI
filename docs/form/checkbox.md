# Checkbox 多选框
> 常见的多选框

## 基本用法

```vue
 <vu-checkbox label="1" v-model="checkbox">js</vu-checkbox>
```

## 多选框组 checkbox-group
```vue
<vu-checkbox-group class="checkbox" v-model="checkbox" @change="changeHandler">
    <vu-checkbox label="1">js</vu-checkbox>
    <vu-checkbox label="2">ts</vu-checkbox>
</vu-checkbox-group>

```

## 参数
| 参数    | 说明                              | 类型                  | 可选值      | 默认值 |
|---------|---------------------------------|-----------------------|-------------|--------|
| v-model | 多选框的值                        | String,Number,Boolean | -           |        |
| label   | checkbox-group每个子radio对应的值 | String,Number,Boolean | -           |        |
| type    | 单选框的排列方式                  | string                | row, column | row    |

## 方法
| method        | 说明                 | 参数           |
|---------------|--------------------|----------------|
| change | 选择多选框后的回调       | 所选中的label值数组 |


## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/checkbox"></qrcode>