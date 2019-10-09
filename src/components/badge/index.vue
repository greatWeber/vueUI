<template>
<div class="vueUI-badge">
    <slot></slot>
    <span v-if="type=='point'" class="badge-point"></span>
    <span v-else-if="type=='number'" class="badge-number">{{number}}</span>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({name:'Badge'})
export default class Badge extends Vue {
    @Prop({type:String,default:'point'}) readonly type?: String; // 1.point,小红点;2. number, 数字
    @Prop({type:[String,Number],default:0}) readonly num;

    // computed
    get number(){
        if (this.num-0>99){
            return '...'
        }else{
            return this.num
        }
    }


}
</script>
    
<style lang="less" scoped>

</style>