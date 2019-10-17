<template>
<form class="vueUI-form">
    <slot></slot>
</form>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch} from 'vue-property-decorator';

@Component({
    name: 'Form',
    provide() {  //高阶
      return {
        Form: this
      };
    },
    created(){
        // 监听，如果有字段就统一添加到form.fields中
        this.$on('vueUI.form.addField',field=>{
            if(field){
                this.fields.push(field);
            }
        });

        // 监听移除字段
        this.$on('vueUI.form.removeField',field=>{
            if(field.prop){
                this.fields.splice(this.fields.indexOf(field.prop),1);
            }
        })
    }
})
export default class Form extends Vue {
    @Prop(Object) readonly model;
    @Prop(Object) readonly rules;

    private fields: Array<any> = []; // 保存所有的字段

    @Watch('rules')
    rulesHandler(){
        this.fields.forEach(field =>{
            field.removeValidateEvents();
            field.addValidateEvents();
        })
    }

    /**
     * 验证
     * 通过调用各个字段的validate方法验证每个字段自身
     */
    private validate(): Promise<any> {
        return new Promise((resolve,reject)=>{
            let valid = true; // 验证是否通过
            let count = 0; // 验证的次数
            // 如果需要验证的fields为空，调用验证时立刻返回callback
            if (this.fields.length==0){
                resolve(true);
                return;
            }

            let invalidFields = {}; // 验证过的字段集合
            this.fields.forEach(field => {
                field.validate('').then(({message,field})=>{
                    if (message){
                        valid = false; // 验证不通过
                    }
                    invalidFields = Object.assign({},invalidFields,field);
                    if (++count === this.fields.length){
                        resolve({message,invalidFields});
                    }
                })
            })
        })
    }

}
</script>
    
<style lang="less" scoped>
</style>