<template>
<div>
    <vu-form :model="formData" :rules="rules">
        <vu-form-item prop="name" label="名字">
            <vu-input type="text" v-model="formData.name" placeholder="请输入名字"></vu-input>
        </vu-form-item>
        <vu-form-item prop="age" label="年龄">
            <vu-input type="number" v-model="formData.age"></vu-input>
        </vu-form-item>
        <vu-form-item label="留言">
            <vu-input type="textarea" v-model="formData.remark"></vu-input>
        </vu-form-item>
    </vu-form>
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