<template>
<div :class="[type==='normal'?'stepper-wrapper--normal':'stepper-wrapper--simple']">
    <p class="stepper-reduce i-b v-m" @click="reduceHandler">
        <span :class="['icon', type==='normal'?'icon-reduce1':'icon-reduce']"></span>
    </p>
    <input type="number" v-model="inputValue" class="stepper-input v-m" @change="changeHandler">
    <p class="stepper-add i-b v-m" @click="addHandler">
        <span :class="['icon' ,type==='normal'?'icon-plus':'icon-add']"></span>
    </p>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'Stepper',
    mixins:[emitter]
})
export default class Stepper extends Vue {
    @Prop(Number) readonly value;
    @Prop({type:Number,default:1}) readonly min;
    @Prop({type:Number,default:9999}) readonly max;
    @Prop({type:String,default:'normal'}) readonly type; // 样式类型：normal, simple

    private inputValue: number = 1;

    @Watch('value')
    valueHandler(){
        this.inputValue = this.value;
    }

    private reduceHandler(){
        if (this.inputValue>this.min){
            this.inputValue -=1;
            this.changeHandler();
        }
    }

    private addHandler(){
        if (this.inputValue<this.max){
            this.inputValue +=1;
            this.changeHandler();
        }
    }

    private changeHandler(){
        if (typeof this.inputValue!=='number'){
            (this as any).$toast.error('请输入数字类型');
            return;
        }
        this.$emit('input',this.inputValue);
        (this as any).dispatch('FormItem','vueUI.form.change',[this.value]);
    }

}
</script>
    
<style lang="less" scoped>

</style>