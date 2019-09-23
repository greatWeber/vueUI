<template>
<div>
    <vueUI-picker @success="successCb">点击打开选择器</vueUI-picker>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Picker extends Vue {

    successCb(data){
        console.log(data);
    }
}
</script>
    
<style lang="less" scoped>

</style>