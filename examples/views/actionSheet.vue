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
    
<style lang="less" scoped>

</style>