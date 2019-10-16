# Loadmore 下拉刷新及加载更多
> 常用的下拉刷新和加载更多
::: danger 注意
使用loadmore组件的时候不要和`fixed`地位一起用，否则下拉的时候会有bug。
:::

## 基本用法
```vue {34,39,40}
<template>
<div>
<div style="height:5rem;overflow:scroll">
    <vueUI-loadmore ref="loadmore" 
    @refresh="refreshHandler" 
    @loadmore="loadmoreHandler"
    :allLoad="allLoad">
        <vueUI-cell v-for="(item,i) in data" :key="i" :title="item"></vueUI-cell>
    </vueUI-loadmore>
</div>
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
::: warning 小心
看上面代码高亮的地址，在加载完成或者下拉刷新完成后，一定要手动调用`refreshEnd/loadmoreEnd`方法来关闭动画
:::

## 参数
| 参数               | 说明               | 类型    | 可选值                                             | 默认值       |
|--------------------|------------------|---------|----------------------------------------------------|--------------|
| type               | 类型               | string  | all: 所有；refresh: 下拉刷新；loadmore: 点击加载更多 | all          |
| maxRange           | 下拉的最大距离(px) | number  | -                                                  | 100          |
| allLoad            | 是否全部加载完成   | booleam | -                                                  | false        |
| refreshPullText    | 开始下拉刷新的文字 | string  | -                                                  | 下拉刷新-.-  |
| refreshLoadingText | 下拉刷新中的文字   | string  | -                                                  | 刷新中...~.~ |
| refreshEndText     | 下拉刷新结束的文字 | string  | -                                                  | 刷新完成!^.^ |
| loadmorePullText   | 开始加载更多的文字 | string  | -                                                  | 点击加载更多 |
| refreshPullText    | 加载更多中的文字   | string  | -                                                  | 加载中...~.~ |
| refreshPullText    | 加载更多结束的文字 | string  | -                                                  | 没有数据     |

## 方法
| method   | 说明                                               | 返回值 |
|----------|--------------------------------------------------|--------|
| refresh  | 下拉刷新的回调，在回调中要手动调用`refreshEnd`方法  | -      |
| loadmore | 加载更多的回调，在回调中要手动调用`loadmoreEnd`方法 | -      |

## 例子
> 直接打开链接，或者手机扫码查看。

<qrcode href="https://greatweber.github.io/vueUI/dist/index.html#/loadmore"></qrcode>