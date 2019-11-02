<template>
<div>
    <vu-button @click="successHandler">成功提示</vu-button>
    <vu-button @click="errorHandler">错误提示</vu-button>
    <vu-button @click="infoHandler">信息提示</vu-button>
    <vu-button @click="textHandler">普通提示</vu-button>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Toast extends Vue {

    private successHandler(){
        (this as any).$toast.success('修改成功!').then(data=>console.log('修改成功'));
    }
    private errorHandler(){
        (this as any).$toast.error('修改失败!');
    }
    private infoHandler(){
        (this as any).$toast.info('不能修改!');
    }
    private textHandler(){
        (this as any).$toast.text('修改成功!');
    }
}
</script>
    
<style lang="less" scoped>
</style>