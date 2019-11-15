<template>
<div class="vueUI-switch-wrapper" @click="changeHandler">
    <label class="vueUI-switch-label" :class="`vueUI-switch-label--${size}`" :style="{background:color}">
        <span class="vueUI-switch-span " :class="selected?'vueUI-switch-act':''"></span>
    </label>
    <span class="vueUI-switch-text" v-if="label">{{label}}</span>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';
@Component({
    name:'Switchs',
    mixins:[emitter],
})

export default class Switchs extends Vue {
    @Prop(Boolean) readonly value;
    @Prop(String) readonly color;
    @Prop(String) readonly label;
    @Prop({type:String,default:'small'}) readonly size; // mini, small, medium

    private selected: boolean = false ;

    @Watch('value')
    valueHandler(){
        this.selected = this.value;
        (this as any).dispatch('FormItem','vueUI.form.change',[this.value]);
    }

    private changeHandler(){
        this.selected =!this.selected;
        this.$emit('input',this.selected);
    }

}
</script>
    
<style lang="less" scoped>

</style>