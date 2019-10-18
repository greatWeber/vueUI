<template>
<div class="vueUI-input-wrapper">
    <input 
        class="vueUI-input"
        :placeholder="placeholder"
        :type="type"
        @input="inputHandler"
        @blur="blurHandler"
        :value="value"
        @change="changeHandler">
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

}
</script>
    
<style lang="less" scoped>
.vueUI-input-wrapper {
    width: 100%;

    .vueUI-input {
        width: 100%;
        text-indent: 0.2rem;
        border: none;
        height: 0.5rem;
        font-size: 14px;
        color: #333;

    }
}
</style>