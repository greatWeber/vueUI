<template>
<label class="vueUI-radio" role="radio">
    <span class="vueUI-radio-input"></span>
    <span class="vueUI-radio-label">
        <slot></slot>
    </span>
</label>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name:'Radio'
})
export default class Radio extends Vue {
    @Prop([String,Number,Boolean]) readonly label;
    @Prop([String,Number,Boolean]) readonly value;

    private isChecked: boolean = false;

    @Watch('value')
    valueHandler(){
        if(this.value === this.label){
            this.isChecked = true;
        }else{
            this.isChecked = false;
        }
    }
}
</script>
    
<style lang="less" scoped>
.vueUI-radio {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.3rem;
}
.vueUI-radio-input {
    width: 0.3rem;
    height: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 0.2rem;
}

.vueUI-radio-label {
    color: #333;
}
</style>