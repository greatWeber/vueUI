<template>
<div>
    <h2 class="title">排列一</h2>
    <vu-checkbox-group class="checkbox" v-model="checkbox" @change="changeHandler">
        <vu-checkbox label="1">js</vu-checkbox>
        <vu-checkbox label="2">ts</vu-checkbox>
    </vu-checkbox-group>
    <h2 class="title">排列二</h2>
    <vu-checkbox-group class="checkbox-column" v-model="checkbox1" @change="changeHandler">
        <vu-checkbox label="1" type="column">js</vu-checkbox>
        <vu-checkbox label="2" type="column">ts</vu-checkbox>
    </vu-checkbox-group>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class CheckBox extends Vue {
    private checkbox: Array<any> = [];
    private checkbox1: Array<any> = [];

    private changeHandler(data){
        console.log(data)
    }
}
</script>
    
<style lang="less" scoped>

.checkbox {
    line-height: 0.6rem;
}

.checkbox-column {
    padding:  0.2rem;
}
</style>