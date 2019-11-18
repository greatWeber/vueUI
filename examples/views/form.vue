<template>
<div>
    <vu-form :model="formData" :rules="rules" ref="form">
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
            <vu-picker mode="date"  @success="successHandler">{{formData.birthday||"请选择日期"}}</vu-picker>
        </vu-form-item>
        <vu-form-item prop="girlFriend" label="是否有女朋友">
            <vu-switch v-model="formData.girlFriend" ></vu-switch>
        </vu-form-item>
        <vu-form-item prop="num" label="数量">
            <vu-stepper v-model="formData.num"></vu-stepper>
        </vu-form-item>
        <vu-form-item label="留言">
            <vu-input type="textarea" v-model="formData.remark" placeholder="请输入留言"></vu-input>
        </vu-form-item>
        <vu-button class="btn" size="medium" round type="primary" @click="submitHandler">提 交</vu-button>
    </vu-form>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface formData {
    name: string,
    age: number,
    sex: number,
    hobby: Array<string>,
    remark: string,
    birthday: string,
    girlFriend: boolean,
    num: number,
}

@Component
export default class Form extends Vue {
    private formData: formData = {
        name:'',
        age:0,
        sex:1,
        hobby:[],
        remark:'',
        birthday:'',
        girlFriend: false,
        num: 1
    };

    private rules: Object = {
        name: [{required:true,message:'请填写名称',trigger:'blur'}],
        age: [{required:true,validator:this.validateAge,trigger:'blur'}],
        sex:[{required:true,message:'请选择性别',trigger:'change'}],
        hobby:[{required:true,message:'请选择爱好',trigger:'change'}],
        birthday:[{required:true,message:'请选择生日',trigger:'change'}],
        girlFriend:[{required:true,message:'是否有女朋友',trigger:'change'}],
        num:[{required:true,message:'选择数量',trigger:'change'}],
    };

    private validateAge(rule,value,callback){
        //  自定义验证规则
        if(!value){
            return callback(new Error('年龄不能为空'));
        }
        if(value<18){
            return callback(new Error('没有满18岁哦!'));
        }
        return callback();
    }

    private successHandler(val){
        console.log(val)
        this.formData.birthday = val.join('-');
    }

    private submitHandler(){
        (this.$refs.form as any).validate().then(data=>{
            console.log(data);
            if(data.validateMessage){
                (this as any).$toast.error(data.validateMessage);
                return false;
            }
        });
        return true;
    }
}
</script>
    
<style lang="less" scoped>
.btn {
    margin: 0.2rem auto;
}
</style>