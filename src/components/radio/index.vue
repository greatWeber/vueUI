<template>
<label class="vueUI-radio" role="radio" @click="radioHandler">
    <span class="vueUI-radio-input" :class="isChecked?'is-checked':''">
        <!-- <radio class="vueUI-radio-self" v-model="radioValue"></radio> -->
    </span>
    <span class="vueUI-radio-label" :class="isChecked?'is-checked':''">
        <slot></slot>
    </span>
</label>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'Radio',
    mixins:[emitter],
    
})
export default class Radio extends Vue {
    @Prop([String,Number,Boolean]) readonly label;
    @Prop([String,Number,Boolean]) readonly value;

    // private isChecked: boolean = false;
    private _radioGroup: any  = null;
    

    // computed

    get isGroup(){
        let parent = this.$parent;
        while(parent){
            if(parent.$options.name !== 'RadioGroup'){
                parent = parent.$parent;
            }else{
                this._radioGroup = parent;
                return true;
            }
        }

        return false;
    }

    get model(){
        return this.isGroup? this._radioGroup.value : this.value;
    }

    get isChecked(){
        if (this.model === this.label){
            return true;
        }else{
            return false;
        }
    }

    /**
     * 模拟radio点击效果
     */
    private radioHandler(){
        if (!this.isChecked){
            // this.isChecked = !this.isChecked;
            
            if (this.isGroup){
                (this as any).dispatch('RadioGroup','input',[this.label])
            }else{
                this.$emit('input',this.label);
            }
        }
    }
}
</script>
    
<style lang="less" scoped>

</style>