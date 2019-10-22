<template>
<div>
    <vueUI-checkbox-group v-model="checkbox" @change="changeHandler">
        <vueUI-checkbox label="1">js</vueUI-checkbox>
        <vueUI-checkbox label="2">ts</vueUI-checkbox>
    </vueUI-checkbox-group>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class CheckBox extends Vue {
    private checkbox: Array<any> = [];

    private changeHandler(data){
        console.log(data)
    }
}
</script>
    
<style lang="less" scoped>
</style>