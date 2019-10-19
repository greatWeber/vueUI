<template>
<div class="vueUI-input-wrapper">
    <div class="vueUI-textarea-wrapper" v-if="Type=='textarea'">
        <textarea 
            class="vueUI-textarea"
            :placeholder="placeholder"
            @input="inputHandler"
            @blur="blurHandler"
            :value="value"
            @change="changeHandler"
            :readonly="readonly"
            :disabled="disabled"
        ></textarea>
        <span v-show="value" class="textarea-clear icon icon-cancelwhite" @click="clearHandler"></span>
    </div>
    <div class="vueUI-input-content" v-else>
        <input 
            class="vueUI-input"
            :placeholder="placeholder"
            :type="Type"
            @input="inputHandler"
            @blur="blurHandler"
            :value="value"
            :readonly="readonly"
            :disabled="disabled"
            @change="changeHandler">

            <span 
                v-if="type==='password'"
                class="psd-eye icon icon-Eyeblind" 
                :class="showEye? 'icon-Eyevision':'icon-Eyeblind'"
                @click="showEyeHandler"
                ></span>
    </div>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'Input',
    mixins:[emitter],
})
export default class Input extends Vue {
    @Prop([String,Number]) readonly value;
    @Prop({type:String,default:'text'}) readonly type;
    @Prop(String) readonly placeholder;
    @Prop(Boolean) readonly readonly;
    @Prop(Boolean) readonly disabled;

    private showEye :boolean = false;
    private Type: string = this.type;

    @Watch('type')
    typeHandler(){
        this.Type = this.type;
    }

    @Watch('value')
    valueHandler(){
        (this as any).dispatch('FormItem','vueUI.form.change',[this.value]);
    }

    //  method
    private inputHandler(e){
        this.$emit('input',e.target.value); // v-model
    }

    private blurHandler(e){
        this.$emit('blur',e);
        //  触发验证
        (this as any).dispatch('FormItem','vueUI.form.blur',[this.value])
    }

    private changeHandler(e){
        this.$emit('change',e.target.value);

    }

    private clearHandler(){
        this.$emit('input','');
    }

    private showEyeHandler(){
        this.showEye =!this.showEye;
        if(this.showEye){
            this.Type = 'text'
        }else{
            this.Type = 'password'
        }
    }

}
</script>
    
<style lang="less" scoped>
.vueUI-input-wrapper {
    width: 100%;

    .vueUI-textarea-wrapper {
        position: relative;
    }

    .textarea-clear {
        position: absolute;
        right: 0.2rem;
        top: 0.1rem;
        color: #ccc;
        font-size: 0.5rem;
    }

    .vueUI-input, .vueUI-textarea {
        width: 100%;
        text-indent: 0.2rem;
        border: none;
        height: 0.5rem;
        
        font-size: 14px;
        color: #333;

    }

    .vueUI-textarea {
        height: 3rem;
        line-height: 1.5;
        margin-top: 0.2rem;
    }

    .vueUI-input-content {
        position: relative;
        line-height: 0.8rem;
        .psd-eye {
            position: absolute;
            right: 0.2rem;
        }
    }
}
</style>