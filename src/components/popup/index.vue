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
    @Prop({type:String,default:'fade'}) readonly position;
    @Prop({type:Boolean,default:true}) readonly showClose;
    @Prop({type:Boolean,default:true}) readonly showPopup;

    private closeHandler():void {
        this.$emit('update:showPopup',false);
    }
}
</script>
    
<style lang="less" scoped>
.vueUI-popup {
    position: fixed;
    left: 0;
    top:0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: #fff;

    .vueUI-popup-close {
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
        font-size: 50px;
        color: #666;

    }
}
</style>