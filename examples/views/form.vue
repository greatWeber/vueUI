<template>
<div>
    <vueUI-form :model="formData" :rules="rules">
        <vueUI-formitem prop="name" label="名字">
            <vueUI-input type="text" v-model="formData.name" placeholder="请输入名字"></vueUI-input>
        </vueUI-formitem>
        <vueUI-formitem prop="age" label="年龄">
            <vueUI-input type="number" v-model="formData.age"></vueUI-input>
        </vueUI-formitem>
        <vueUI-formitem label="留言">
            <vueUI-input type="textarea" v-model="formData.remark"></vueUI-input>
        </vueUI-formitem>
    </vueUI-form>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Form extends Vue {
    private formData: Object = {
        name:'',
        age:0,
        remark:''
    };

    private rules: Object = {
        name: [{required:true,message:'请填写名称',trigger:'blur'}],
        age: [{required:true,message:'请填写年龄',trigger:'blur'}],
    }
}
</script>
    
<style lang="less" scoped>
</style>