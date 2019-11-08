<template>
<div class="stepper-wrapper">
    <p class="stepper-reduce i-b v-m" @click="reduceHandler">
        <span class="icon icon-reduce1"></span>
    </p>
    <input type="number" v-model="inputValue" class="stepper-input v-m" @change="changeHandler">
    <p class="stepper-add i-b v-m" @click="addHandler">
        <span class="icon icon-plus"></span>
    </p>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'Stepper'
})
export default class Stepper extends Vue {
    @Prop(Number) readonly value;
    @Prop({type:Number,default:1}) readonly min;
    @Prop({type:Number,default:9999}) readonly max;

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
.stepper-wrapper {
    display: inline-block;

    .stepper-reduce, .stepper-add {
        display: inline-block;
        width: 0.56rem;
        height: 0.56rem;
        border-radius: 2px;
        text-align: center;
        line-height: 0.56rem;
        background: #F2F2F2;

        .icon {
            font-size: 0.24rem;
            color: #666;
            font-weight: bold;
        }
    }

    .stepper-input {
        width: 1.5rem;
        height: 0.56rem;
        border: none;
        background: #F2F2F2;
        border-radius: 4px;
        text-align: center;
        // margin: 0 0.1rem;
    }
}
</style>