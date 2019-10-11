<template>
<transition name="fade">
    <div class="vueUI-loading-wrapper" v-show="showFlag">
        <div class="vueUI-loading flex flex-colmun" >
            <div class="vueUI-loading-animation"> 
                <ball-span-fade v-if="type=='ballSpanFade'"></ball-span-fade>
                <ball-triangle-path v-else-if="type=='ballTrianglePath'"></ball-triangle-path>
                <line-scale v-else-if="type=='lineScale'"></line-scale>
                <line-spin v-else-if="type=='lineSpin'"></line-spin>
                <pacman v-else-if="type=='pacman'"></pacman>
                <square-jelly-box v-else-if="type=='squareJellyBox'"></square-jelly-box>
            </div>
            <p class="vueUI-loading-text">{{title}}</p>
        </div>
    </div>
</transition>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch} from 'vue-property-decorator';
import ballSpanFade from './ballSpanFade.vue';
import ballTrianglePath from './ballTrianglePath.vue';
import lineScale from './lineScale.vue';
import lineSpin from './lineSpin.vue';
import pacman from './pacman.vue';
import squareJellyBox from './squareJellyBox.vue';
import { resolve } from 'dns';

@Component({
    name:'Loading',
    components:{
        ballSpanFade,
        ballTrianglePath,
        lineScale,
        lineSpin,
        pacman,
        squareJellyBox,
    },
    created(){
        this.type = this.Type;
        this.title = this.Title;
    }
})
export default class Loading extends Vue {
    @Prop({type:String,default:'ballSpanFade'}) readonly Type;
    @Prop({type:String,default:'加载中...'}) readonly Title;

    private type: String;
    private title: String;
    private showFlag: Boolean = false;

    @Watch('Type')
    TypeHandler(val:boolean,oldVal:boolean){
        this.type = this.Type;
    }

    @Watch('Title')
    TitleHandler(val:boolean,oldVal:boolean){
        this.title = this.Title;
    }
    /**
     * 公共方法： 打开加载框
     * title: 显示的标题
     * type: 加载动画类型
     */
    public show(title?: String, type?: String):Promise<any> {
        this.title = title? title: this.title;
        this.type = type? type: this.type;
        this.showFlag = true ;
        return new Promise((resolve,reject)=>{resolve();})
    }

    public hide():Promise<any> {
        this.showFlag = false;
        return new Promise((resolve,reject)=>{resolve();})
    }



}
</script>
    
<style lang="less" scoped>

</style>