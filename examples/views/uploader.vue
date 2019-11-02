<template>
<div>
    <vu-uploader @uploaderHandler="uploaderHandler" v-model="imgList"></vu-uploader>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Uploader extends Vue {

    private imgList: Array<string> = [];

    private uploaderHandler(files){
        this.imgList.push(files[0].base64);
    }
}
</script>
    
<style lang="less" scoped>
</style>