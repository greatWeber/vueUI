<template>
<div>
    <p class="cell">
        <vu-button @click="messageHandler">点击打开message</vu-button>
    </p>
    <p class="cell">
        <vu-button @click="inputHandler">点击打开input</vu-button>
    </p>
    <p class="cell">
        <vu-button @click="disposeHandler">点击打开配置(dispose)</vu-button>
    </p>

</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Modal extends Vue {
    private messageHandler(){
        (this as any).$modal.message('哈哈哈, 你打开的是message').then(data=>{
            (this as any).$toast.text('点击确定');
        },()=>{
            (this as any).$toast.text('点击取消');
        })
    }

    private inputHandler(){
        (this as any).$modal.input('请输入内容').then(data=>{
            console.log(data);
            (this as any).$toast.text('点击确定');
        },()=>{
            (this as any).$toast.text('点击取消');
        })
    }

    private disposeHandler(){
        (this as any).$modal.dispose({
            title:'自定义',
            value:'这个是自定义弹窗',
            type:'message',
            cancelText:'cancel',
            confirmText:'confirm'
        }).then(data=>{
            (this as any).$toast.text('点击确定');
        },()=>{
            (this as any).$toast.text('点击取消');
        })
    }
}
</script>
    
<style lang="less" scoped>
.cell {
    padding: 0.2rem;
}
</style>