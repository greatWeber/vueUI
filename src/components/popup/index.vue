<template>
<transition :name="position">
    <div class="vueUI-popup" v-show="showPopup">
        <span v-if="showClose" 
            class="icon icon-cancelwhite vueUI-popup-close"
            @click="closeHandler"
            ></span>
        <div class="vueUI-popup-content">
            
        </div>
    </div>
</transition>
</template>
    
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({name:'Popup'})
export default class Popup extends Vue {
    @Prop({type:String,default:'fade'}) readonly position;  // fade,left,right,top,bottom
    @Prop({type:Boolean,default:true}) readonly showClose;
    @Prop({type:Boolean,default:false}) readonly showPopup;

    private closeHandler():void {
        this.$emit('update:showPopup',false);
    }
}
</script>
    
<style lang="less" scoped>

</style>