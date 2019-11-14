<template>
<div>
    <vu-form :model="formData" :rules="rules">
        <vu-form-item prop="name" label="名字">
            <vu-input type="text" v-model="formData.name" placeholder="请输入名字"></vu-input>
        </vu-form-item>
        <vu-form-item prop="age" label="年龄">
            <vu-input type="number" v-model="formData.age"></vu-input>
        </vu-form-item>
        <vu-form-item prop="sex" label="性别">
            <vu-radio-group v-model="formData.sex">
                <vu-radio  label="1">boy</vu-radio>
                <vu-radio  label="2">girl</vu-radio>
            </vu-radio-group>
        </vu-form-item>
        
        <vu-form-item prop="hobby" label="爱好">
            <vu-checkbox-group v-model="formData.hobby">
                <vu-checkbox label="1">唱</vu-checkbox>
                <vu-checkbox label="2">跳</vu-checkbox>
                <vu-checkbox label="3">rap</vu-checkbox>
            </vu-checkbox-group>
        </vu-form-item>
        <vu-form-item prop="birthday" label="生日">
            <vu-picker mode="date"   @success="successCb">请选择日期</vu-picker>
        </vu-form-item>
        <vu-form-item label="留言">
            <vu-input type="textarea" v-model="formData.remark" placeholder="请输入留言"></vu-input>
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
        sex:1,
        hobby:[],
        remark:'',

    };

    private rules: Object = {
        name: [{required:true,message:'请填写名称',trigger:'blur'}],
        age: [{required:true,message:'请填写年龄',trigger:'blur'}],
        sex:[{required:true,message:'请选择性别',trigger:'change'}],
        hobby:[{required:true,message:'请选择爱好',trigger:'change'}]
    }
}
</script>
    
<style lang="less" scoped>
</style>