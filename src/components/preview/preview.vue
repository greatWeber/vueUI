<template>
<transition name="fade">
    <div class="vueUI-preview flex align-center flex-center" v-show="showFlag">
        <img :src="src" alt="" class="vueUI-preview-img" 
            :style="{transform:`scale(${scale}) rotate(${rotate}deg)`}">

        <div class="vueUI-preview-tools flex">
            <span class="tool-reduce icon icon-reduce" @click="reduceHandler"></span>
            <span class="tool-reduce icon icon-add" @click="addHandler"></span>
            <span class="tool-resize icon icon-resize" @click="resizeHandler"></span>
            <span class="tool-left-turn icon icon-left-turn" @click="rotate-=90"></span>
            <span class="tool-right-turn icon icon-right-turn" @click="rotate+=90"></span>
            <span class="tool-close icon icon-error" @click="showFlag=false;"></span>
        </div>
    </div>
</transition>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({name:'Preview'})
export default class Preview extends Vue {
    private src: string = ''; 
    private showFlag: boolean = false;

    private scale: number =1;
    private rotate: number = 0;

    /**
     * 显示预览图
     * src: 图片地址
     */
    public show(src: string):void {
        this.src = src;
        this.showFlag = true;
    }

    public hide():void {
        this.showFlag = false;
        this.src = '';
    }

    private reduceHandler():void {
        if(this.scale>0.5){
            this.scale-=0.5;
        }
    }

    private addHandler():void {
        if(this.scale<5){
            this.scale+=0.5;
        }
    }

    private resizeHandler():void {
        this.scale = 1;
        this.rotate = 0;
    }
}
</script>
    
<style lang="less" scoped>
.vueUI-preview {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);

}

.vueUI-preview-img {
    width: 100vw;
    height: auto;
}

.vueUI-preview-tools {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    line-height: 1rem;
    color: #fff;
    text-align: center;

    &>.icon {
        flex: 1;
        font-size: 0.5rem;
    }
}
</style>