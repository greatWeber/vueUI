<template>
<button 
    :disabled="disabled"
    @click.prevent="handleClick"
    :class="[
        'vueUI-button',
        'vueUI-ripple',
        size? 'vueUI-button--'+size : '',
        type?'vueUI-button--'+type:'',
        {
            'is-round':round,
            'is-plain':plain,
            'is-loading':loading
        }
    ]">
    <span v-if="loading" class="icon icon-loading vueUI-icon--loading"></span>
    <slot></slot>
</button>
</template>
    
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({name: 'Button'})
export default class Button extends Vue {
    @Prop(Boolean) readonly round?: boolean;
    @Prop(Boolean) readonly plain?: boolean;
    @Prop(Boolean) readonly loading?: boolean;
    @Prop({type:String,default:'mini'}) readonly size?: string; // mini, small, medium
    @Prop({type:String,default:''}) readonly type?: string; // primary, success, info, warning, danger

    // computed : 是否禁用按钮
    get disabled(){
        return this.loading;
    }

    /**
     * 点击事件
     */
    private handleClick(e:any):void {
        if (this.disabled) return;
        this.$emit('click',e);
    }

    
}
</script>
