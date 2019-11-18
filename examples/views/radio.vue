<template>
<div>
    <h2 class="title">排列一</h2>
    <vu-radio-group v-model="radio" @change="changeHandler">
        <vu-radio  label="1" type="row">单选按钮</vu-radio>
        <vu-radio  label="2" type="row">单选按钮</vu-radio>
    </vu-radio-group>

    <h2 class="title">排列二</h2>
    <vu-radio-group class="radio" v-model="radio2" @change="changeHandler">
        <vu-radio  label="1" >单选按钮</vu-radio>
        <vu-radio  label="2" >单选按钮</vu-radio>
    </vu-radio-group>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Radio extends Vue {
    private radio: string = '1';
    private radio2: string = '1';

    private changeHandler(data){
        console.log(data);
    }
}
</script>
    
<style lang="less" scoped>
.title {
    font-size: 0.38rem;
    color: #666;
    line-height: 2;
    padding-left: 0.2rem;
    background: #f5f5f5;
}

.radio {
    padding:  0.3rem 0.2rem;
}
</style>