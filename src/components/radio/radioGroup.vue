<template>
<div class="vueUI-radio-group">
    <slot></slot>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'RadioGroup',
    mixins:[emitter],
})
export default class RadioGroup extends Vue {
    @Prop([String,Number,Boolean]) readonly value;

    @Watch('value')
    valueHandler(){
        // 触发验证
        (this as any).dispatch('FormItem','vueUI.form.change',[this.value]);
        this.$emit('change',this.value);
    }

}
</script>
    
<style lang="less" scoped>
</style>