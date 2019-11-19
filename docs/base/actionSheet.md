# ActionSheet 动作面板
> 模拟ios的动作面板

## 基本用法
```vue
<template>
<div>
    <vu-button class="btn" size="medium" round @click="showSheet=true;">actionsheet</vu-button>
    <vu-actionsheet :menu="menus" v-model="showSheet"></vu-actionsheet>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class ActionSheet extends Vue {
    showSheet: boolean = false;
    menus: Array<any> = [
        {
            text:'分享QQ',
            color:'blue',
            fn:()=>{console.log('you click 分享QQ')}
        },
        {
            text:'分享朋友圈',
            color:'green',
            fn:()=>{console.log('you click 分享朋友圈')}
        },
    ]
}
</script>
```

## 参数
| 参数    | 说明               | 类型    | 可选值 | 默认值 |
|---------|------------------|---------|--------|--------|
| menu    | 显示面板的数组     | array   | -      | -      |
| v-model | 控制面板的显示隐藏 | boolean | -      | -      |

## menu的参数值
| 参数  | 说明             | 类型     | 可选值 | 默认值 |
|-------|----------------|----------|--------|--------|
| text  | 面板项的标题     | string   | -      | -      |
| color | 面板项的字体颜色 | string   | -      | -      |
| fn    | 点击面板项的回调 | function | -      | -      |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/actionSheet"></qrcode>
