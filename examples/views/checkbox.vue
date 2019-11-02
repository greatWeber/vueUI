<template>
<div>
    <vu-checkbox-group v-model="checkbox" @change="changeHandler">
        <vu-checkbox label="1">js</vu-checkbox>
        <vu-checkbox label="2">ts</vu-checkbox>
    </vu-checkbox-group>
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