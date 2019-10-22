<template>
<label class="vueUI-checkbox" role="checkbox" v-if="type==='column'">
    <span class="vueUI-checkbox-span i-b v-m" :class="model?'is-checked':''">
        <input class="vueUI-checkbox-input" type="checkbox" v-model="model">
        <i class="icon icon-successful" v-show="model"></i>
    </span>
    <div class="vueUI-checkbox-label i-b v-m" :class="model?'is-checked':''">
        <slot></slot>
    </div>
</label>
<label class="vueUI-checkbox-row space-between" role="checkbox" v-else>
    <div class="vueUI-checkbox-label i-b v-m" :class="model?'is-checked':''">
        <slot></slot>
    </div>
    <span class="vueUI-checkbox-span i-b v-m" :class="model?'is-checked':''">
        <input class="vueUI-checkbox-input" type="checkbox" v-model="model">
        <i class="icon icon-successful" v-show="model"></i>
    </span>
</label>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'Checkbox',
    mixins:[emitter],
})
export default class Checkbox extends Vue {
    @Prop([String,Number,Boolean]) readonly value;
    @Prop([String,Number,Boolean]) readonly label; // 只有在checkbox-group组件里面才有效
    @Prop({type:String,default:'row'}) readonly type; // 排列布局： row, column

    private isChecked: boolean = false;
    private _checkboxGroup: any = null;

    get isGroup(){
        let parent = this.$parent;
        while(parent){
            if(parent.$options.name !== 'CheckboxGroup'){
                parent = parent.$parent;
            }else{
                this._checkboxGroup = parent;
                return true;
            }
        }
        return false;
    }

    get model(){

        return this.isGroup? this._checkboxGroup.value.indexOf(this.label)!==-1 : this.value;
    }

    set model(val){
        if (this.isGroup){
            let data = {k:this.label,v:val};
            (this as any).dispatch('CheckboxGroup','inputHandler',[data]);
            // val?this._checkboxGroup.value.push(val): this._checkboxGroup.splice(this._checkboxGroup.value.indexOf(val),1);
        }else{
            this.$emit('input',val);
        }
    }

    @Watch('value')
    valueHandler(){
        this.$emit('change',this.value);
    }

}
</script>
    
<style lang="less" scoped>
</style>