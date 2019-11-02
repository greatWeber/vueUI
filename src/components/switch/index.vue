<template>
<div class="vueUI-switch-wrapper" @click="changeHandler">
    <label class="vueUI-switch-label vueUI-switch-label--medium" :style="{background:color}">
        <span class="vueUI-switch-span " :class="selected?'vueUI-switch-act':''"></span>
    </label>
    <span class="vueUI-switch-text" v-if="label">{{label}}</span>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';
@Component({
    name:'Switchs'
})
export default class Switchs extends Vue {
    @Prop(Boolean) readonly value;
    @Prop(String) readonly color;
    @Prop(String) readonly label;

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
.vueUI-switch-wrapper {
    display: inline-block; 
}
.vueUI-switch-label {
    border: 1px solid #ccc;
    background: #539BED;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;

    .vueUI-switch-span {
        width: 102%;
        height: 102%;
        display: block;
        position: relative;
        background: #fff;
        transition: transform 0.3s linear;
        &::after {
            content: '';
            border: 1px solid #ccc;
            border-radius: 50%;
            display: block;
            position: absolute;
            right: 0;
            top: -1px;
            background: #fff;
        }
    }
}
.vueUI-switch-text {
    font-size: 12px;
    color: #666;
    vertical-align: middle;
}

//  mini style
.vueUI-switch-label--mini {
    width: 0.6rem;
    height: 0.3rem;
    border-radius: 0.15rem;
    
    .vueUI-switch-act {
        transform: translateX(-0.3rem);
    }
    .vueUI-switch-span {
        border-top-right-radius: 0.15rem;
        border-bottom-right-radius: 0.15rem;
        &::after {
            width: 0.3rem;
            height: 0.3rem;
            
        }
    }  
}

//  small style
.vueUI-switch-label--small {
    width: 1rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    
    .vueUI-switch-act {
        transform: translateX(-0.5rem);
    }
    .vueUI-switch-span {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        &::after {
            width: 0.5rem;
            height: 0.5rem;
            
        }
    }  
}

//  medium style
.vueUI-switch-label--medium {
    width: 1.2rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    
    .vueUI-switch-act {
        transform: translateX(-0.6rem);
    }
    .vueUI-switch-span {
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        &::after {
            width: 0.6rem;
            height: 0.6rem;
            
        }
    }  
}
</style>