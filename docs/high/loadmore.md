# Loadmore 加载更多组件
> 有下拉刷新和加载更多的功能

## 基本用法

```vue
<template>
<div>
    <vu-loadmore ref="loadmore" 
    @refresh="refreshHandler" 
    @loadmore="loadmoreHandler"
    :allLoad="allLoad">
        <vu-cell v-for="(item,i) in data" :key="i" :title="item"></vu-cell>
    </vu-loadmore>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Loadmore extends Vue {
    private data: Array<any> = [
        '测试数据1',
        '测试数据2',
        '测试数据3',
        '测试数据5',
        '测试数据6',
        '测试数据1',
        '测试数据2',
        '测试数据3',
        '测试数据5',
        '测试数据6',
    ];
    private allLoad: boolean = false;

    private refreshHandler():void {
        setTimeout((this.$refs.loadmore as any).refreshEnd,2000);
    }

    private loadmoreHandler():void {
        setTimeout(()=>{
            (this.$refs.loadmore as any).loadmoreEnd();
            this.allLoad = true;
        },2000)
    }
}
</script>
```

## 参数
| 参数                | 说明               | 类型    | 可选值                                             | 默认值       |
|---------------------|------------------|---------|----------------------------------------------------|--------------|
| type                | 功能类型           | string  | all: 所有；refresh: 下拉刷新；loadmore: 点击加载更多 | all          |
| maxRange            | 下拉最大的距离     | number  | -                                                  | 100(px)      |
| allLoad             | 是否全部加载完成   | boolean | -                                                  | false        |
| refreshPullText     | 开始下拉的文字     | string  | -                                                  | 下拉刷新-.-  |
| refreshLoadingText  | 下拉中的文字       | string  | -                                                  | 刷新中...~.~ |
| refreshEndText      | 开始结束的文字     | string  | -                                                  | 刷新完成!^.^ |
| loadmorePullText    | 开始加载更多的文字 | string  | -                                                  | 点击加载更多 |
| loadmoreLoadingText | 加载更多中的文字   | string  | -                                                  | 加载中...~.~ |
| loadmoreEndText     | 加载更多结束的文字 | string  | -                                                  | 没有数据     |

## 方法
| method   | 说明           | 参数 |
|----------|--------------|------|
| refresh  | 下拉刷新的回调 |      |
| loadmore | 加载更多的回调 |      |

::: tip 提示
下拉刷新完成后要手动调用`refreshEnd`方法关闭下拉；
加载更多完成后要手动调用`loadmoreEnd`方法关闭加载更多
:::




## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/loadmore"></qrcode>