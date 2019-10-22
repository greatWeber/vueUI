<template>
<div class="vueUI-checkbox-group">
    <slot></slot>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'CheckboxGroup',
    mixins:[emitter],
    created(){
        this.$on('inputHandler',(data)=>{
            console.log(data);
            let value = Array.isArray(this.value)?this.value:[this.value];
            if(data.k){
                if(data.v){
                    value.push(data.k)
                }else{
                    value.indexOf(data.k)!==-1?value.splice(value.indexOf(data.k),1):'';
                }
                console.log(value.indexOf(data.k))
                this.$emit('input',value);
            }

        })
    }
})
export default class CheckboxGroup extends Vue {
    @Prop([String,Number,Boolean,Array]) readonly value;

    @Watch('value')
    valueHandler(){
        //  触发验证
        (this as any).dispatch('FormItem','vueUI.form.change',[this.value]);
        this.$emit('change',this.value);
    }
}
</script>
    
<style lang="less" scoped>
</style>