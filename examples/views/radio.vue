<template>
<div>
    <vueUI-radio-group v-model="radio" @change="changeHandler">

        <vueUI-radio  label="1" type="row">单选按钮</vueUI-radio>
        <vueUI-radio  label="2" type="row">单选按钮</vueUI-radio>
    </vueUI-radio-group>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Radio extends Vue {
    private radio: string = '1';

    private changeHandler(data){
        console.log(data);
    }
}
</script>
    
<style lang="less" scoped>
</style>