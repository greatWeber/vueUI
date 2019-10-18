<template>
<div class="vueUI-form-item flex">
    <slot name="label">
        <label v-show="label" class="vueUI-form-label" :for="labelFor">{{label}}</label>
    </slot>
    <div class="vueUI-form-content">
        <slot></slot>
        <transition name="fade">
            <div class="vueUI-form-error" v-show="validateMessage">
                <slot name="error">
                    <span class="icon icon-error v-m"></span>
                    <span class="vueUI-form-error-text v-m">{{validateMessage}}</span>
                </slot>
            </div>
        </transition>
    </div>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch, Inject, Provide } from 'vue-property-decorator';
import AsyncValidator from 'async-validator';
import emitter from '@/mixins/emit';

@Component({
    name: 'FormItem',
    mixins:[emitter],
    mounted(){
        if (this.prop){
            this.dispatch('Form','vueUI.form.addField',[this]);
            let initialValue = this.fieldValue;
            if (Array.isArray(initialValue)){
                initialValue = [].concat(initialValue);
            }
            Object.defineProperty(this,'initialValue',{
                value: initialValue
            });
            this.addValidateEvents()
        }
    },
    beforeDestroy(){
        this.dispatch('Form','vueUI.form.removeField',[this])
    }
})
export default class FormItem extends Vue {
    @Prop(String) readonly for;
    @Prop(String) readonly label;
    @Prop(String) readonly prop;

    @Inject() readonly Form;

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

    get labelFor(){
        return this.for || this.prop;
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
        let formRules = (this.form as any).rules[this.prop] || [];
        return formRules;
    }

    private validate(trigger: string){
        return new Promise((resolve,reject)=>{
            this.validateDisabled = false;
            const rules = this.getFilteredRule(trigger);
            if (!rules || rules.length==0){
                resolve();
                return ;
            }
            this.validateState = 'validating'; // 状态改成验证中

            rules.forEach(rule => {
                delete rule.trigger;  
            });
            const descriptor = {};
            descriptor[this.prop] = rules;
            const validator = new AsyncValidator(descriptor);
            const model = {};
            model[this.prop] = this.fieldValue;
            validator.validate(model,{firstFields:true},(error, invalidFields)=>{
                this.validateState = !error? 'success':'error';
                this.validateMessage = error? error[0].message : '';
                let validateMessage =  this.validateMessage;
                resolve({validateMessage,invalidFields});
                this.Form && this.Form.$emit('validate',this.prop, !error, this.validateMessage || null)
            })
        })
    }
    //  根据触发器筛选出对应的验证规则
    private getFilteredRule(trigger: string){
        const rules = this.getRules();
        return rules.filter(rule=>{
            if (!rule.trigger || trigger==='')return true;
            if (Array.isArray(rule.trigger)){
                return rule.trigger.indexOf(trigger)> -1;
            }else{
                return rule.trigger === trigger;
            }
        }).map(rule=>Object.assign({},rule));
    }

    /**
     * 添加验证事件
     */
    private addValidateEvents(){
        const rules = this.getRules();
        if (rules.length){
            this.$on('vueUI.form.blur',this.onFieldBlur);
            this.$on('vueUI.form.change',this.onFieldChange);
        }
    }

    private removeValidateEvents(){
        this.$off();
    }

    private onFieldBlur(){
        this.validate('blur');
    }

    private onFieldChange(){
        this.validate('change');
    }
}
</script>
    
<style lang="less" scoped>
.vueUI-form-item {
    // width: 100%;
    padding: 0 0.2rem;
    // height: 0.8rem;
    line-height: 0.8rem;
    text-align: left;
    border-bottom: 0.01rem solid #eee;
}
.vueUI-form-label {
    font-size: 0.3rem;
    min-width: 1rem;
    max-width: 3rem;
    padding-right: 0.2rem;
    font-weight: bold;
}

.vueUI-form-content {
    flex: 5;
}
.vueUI-form-error {
    padding: 0.2rem;
    line-height: 1;
    font-size: 12px;
    color: red;

    .icon {
        font-size: 12px;
    }
}

</style>