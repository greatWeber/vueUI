<template>
<div>
    <vu-search v-model="key" @search="searchHandler" @clear="clearHandler"></vu-search>
    <vu-search :round="true"></vu-search>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Search extends Vue {
    private key:string = '';

    private searchHandler(val){
        console.log(val);
    }

    private clearHandler(){
        console.log('clear')
    }
}
</script>
    
<style lang="less" scoped>
</style>