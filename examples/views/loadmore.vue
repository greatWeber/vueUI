<template>
<div>
<p style="height:2rem; background:red;"></p>
<div style="height:5rem;overflow:scroll">
    <vu-loadmore ref="loadmore" 
    @refresh="refreshHandler" 
    @loadmore="loadmoreHandler"
    :allLoad="allLoad">
        <vu-cell v-for="(item,i) in data" :key="i" :title="item"></vu-cell>
    </vu-loadmore>
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
    
<style lang="less" scoped>
</style>