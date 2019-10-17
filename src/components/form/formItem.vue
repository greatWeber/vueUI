<template>
<div class="vueUI-form-item">
    <label :for="for">{{label}}</label>
    <div class="vueUI-form-content">
        <slot></slot>
        <span class="vueUI-form-error">{{validateMessage}}</span>
    </div>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component({
    name: 'FormItem',
    inject: ['Form'],
})
export default class FormItem extends Vue {
    @Prop(String) readonly for;
    @Prop(String) readonly label;
    @Prop(String) readonly prop;

    private validateState :string = '';
    private validateMessage :string= '';
    private validateDisabled :boolean= false;
    private validator: object= {};
    private isNested: boolean= false;

    // computed
    get form(){
        // 查找父级对应的表单
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while(parentName !== 'Form'){
            if(parentName === 'FormItem'){
                this.isNested = true;
            }
            parent = parent.$parent;
            parentName = parent.$options.name;
        }
        return parent;
    }

    get fieldValue(){
        //  找到prop对应的字段值
        const model = (this.form as any).model;
        if (!model || !this.prop)return;
        return model[this.prop];
    }

    // methods
    /**
     * 获取父级表单的验证规则数组
     */
    private getRules(){
        let formRules = (this.form as any).rules || [];
        return formRules;
    }

    private validate(trigger: string){
        return new Promise((resolve,reject)=>{
            this.validateDisabled = false;
            const rules = this.getFilteredRule(trigger);
        })
    }

    private getFilteredRule(trigger: string){
        
    }

    /**
     * 添加验证事件
     */
    private addValidateEvents(){
        const rules = this.getRules();
        if (rules.length){
            this.$on('vueUI.form.blur',this.onFieldBlur);
        }
    }

    private onFieldBlur(){
        this.validate('blur');
    }
}
</script>
    
<style lang="less" scoped>
</style>