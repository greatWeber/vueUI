<template>
<div class="vueUI-cell flex space-between vueUI-ripple" @click="jumpHandler">
    <p class="vueUI-cell-left">
        <span v-if="iconType=='icon'&&icon" class="vueUI-cell-icon icon v-m" :class="icon" :style="{color:color}"></span>
        <img v-if="iconType=='img'&&icon" class="vueUI-cell-img v-m" :src="icon" alt="">
        <span class="vueUI-cell-key v-m">{{title}}</span>
    </p>
    <p class="vueUI-cell-right">
        <span class="vueUI-cell-value v-m">{{value}}</span>
        <span v-if="arrow==true" class="vueUI-cell-arrow v-m icon icon-next"></span>
    </p>
</div>
</template> 
    
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({name:'Cell'})
export default class Cell extends Vue {
    @Prop(String) readonly title?: String;
    @Prop(String) readonly value?: String;
    @Prop({type:String,default:'icon'}) readonly iconType?: String;
    @Prop(String) readonly icon?: String;
    @Prop(Boolean) readonly arrow?: Boolean;
    @Prop(String) readonly color?: String;
    @Prop(Object) readonly to?: Object;

    private jumpHandler():void {
        if (!this.to)return;
        setTimeout(()=>{
            try {
                (this as any).$router.push(this.to);
            } catch (error) {
                console.error(error);
            }
        },200)
    }
}
</script>
    
<style lang="less" scoped>

</style>