<template>
<div>
    <vueUI-loading></vueUI-loading>

    <vueUI-button @click="loadingHandler">点击加载</vueUI-button>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Loading extends Vue {

    private loadingHandler():void {
        (this as any).$loading.show();
    }
}
</script>
    
<style lang="less" scoped>

</style>