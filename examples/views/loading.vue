<template>
<div>
    <vu-loading></vu-loading>

    <vu-button @click="loadingHandler">点击加载</vu-button>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Loading extends Vue {

    private loadingHandler():void {
        (this as any).$loading.show();
        setTimeout(()=>{
            (this as any).$loading.hide();
        },2000)
    }
}
</script>
    
<style lang="less" scoped>

</style>