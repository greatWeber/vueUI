<template>
<div :class="['vueUI-swiper']" ref="swiper" 
    @touchstart="touchStartHandler"
    @touchmove="touchMoveHandler"
    @touchend="touchEndHandler"
    >
    <div class="vueUI-swiper-content" 
    :style="{width:contentWidth,transform:transform,transition:transition}"
    @transitionend="transitionend"
    >
        <div class="vueUI-swiper-item" :style="{width:itemWidth}" v-for="(item,i) in imgArr" :key="i">
            <img class="vueUI-swiper-img" :src="item" alt="" :style="{objectFit:fit}">
            <slot :swiper="item"></slot>
        </div>
    </div>
    <div class="vueUI-swiper-point flex flex-center align-center" v-if="showPoint">
        <span class="vueUI-point-item" :class="[pointIndex==i?'vueUI-point-active':'']"  v-for="(item,i) in len" :key="i"></span>
    </div>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name:'Swiper',
    mounted(){
        this.width = this.$refs.swiper&&(this.$refs.swiper as any).offsetWidth || document.body.offsetWidth;
        if(this.auto) this.autoPlayHandler();
    }
    })
export default class Swiper extends Vue {

    @Prop(Array) readonly data;
    @Prop({type:Boolean,default:false}) readonly auto;  // 是否自动滚动
    @Prop({type:Number,default:2000}) readonly time; // 滚动的间隔时间
    @Prop({type:Boolean,default:true}) readonly showPoint; // 是否显示小圆点
    // @Prop(String) readonly Class; // 自定义样式class 
    @Prop({type:String,default:'cover'}) readonly fit; // 图片裁剪种类

    private timer: any = null;
    private width: number = document.body.offsetWidth;
    private transform: string = '';
    private transition: string = 'transform 0.5s linear';
    private n: number = 1;
    private len: number = 0;
    private pointIndex: number = 0;
    private locking: boolean = false;
    private theLast: number = 0; // 0: 没有到最后一个；1. 向右最后一个； -1. 向左最后一个

    private startX: number = 0;
    private rangeX: number = 0;
    private lastX: number = 0;

    get imgArr(){
        let first = this.data[0];
        let end = this.data[this.data.length-1];
        this.len = this.data.length;
        this.transform = `translateX(-${(this.n)*this.width}px)`;
        this.lastX = -this.n*this.width;
        return [end,...this.data,first]
    }

    get contentWidth(){

        return this.width * this.imgArr.length+'px';
    }

    get itemWidth(){
        return this.width +'px';
    }

    @Watch('auto')
    autoHandler(val:Boolean,oldVal:Boolean){
        this.autoPlayHandler();
    }

    private autoPlayHandler():void {
        clearInterval(this.timer);
        let _this = this;
        this.timer = setInterval(()=>{
            _this.n--;
            _this.locking = true;
            _this.moveCode();
        },this.time)
    }

    private moveCode():void {
        let _this = this;
         if (this.n==this.imgArr.length-1){
            this.transition = 'transform 0.5s linear';
            this.transform = `translateX(-${(this.n)*this.width}px)`;
            this.theLast = 1;
        }else if (this.n>=1&&this.n<this.imgArr.length-1){
            this.pointIndex = this.n-1;
            this.transition = 'transform 0.5s linear';
            this.transform = `translateX(-${this.n*this.width}px)`;
        } else if(this.n==0){
            this.pointIndex = this.n+1;
            this.transition = 'transform 0.5s linear';
            this.transform = `translateX(0px)`;
            this.theLast = -1;
        }
    }
    /**
     * 动画结束的回调
     */
    private transitionend():void {
        this.locking = false;
        if (this.theLast){
            // this.imgArr.pop();
            this.n=this.theLast==-1?this.imgArr.length-2:1;
            this.pointIndex = this.theLast==-1?this.len-1:0;
            this.theLast = 0;
            this.$nextTick(()=>{
                this.transition = '';
                this.transform = `translateX(-${this.n*this.width}px)`;
            })
        }
        this.lastX = -this.n* this.width;
        this.$emit('transitionend');
    }

    private touchStartHandler(e):void {
        if (this.auto) clearInterval(this.timer);
        this.startX = e.targetTouches[0].clientX; // 记录开始的位置
    }

    private touchMoveHandler(e):void {
        if (this.locking) return;
        this.rangeX = e.targetTouches[0].clientX - this.startX;
        this.transform = `translateX(${this.lastX+this.rangeX}px)`;
        this.transition = '';
    }

    private touchEndHandler(e):void {
        /**
         * todo:
         * 1. 判断位置，是否宽度一半
         * 2. 移动到对应的位置
         * 3. 改变对应变量的值
         */
        if(this.locking) return;
        if(this.rangeX<0&&Math.abs(this.rangeX)>this.width/2){
            this.n++;
        }else if(this.rangeX>0&&this.rangeX>this.width/2){
            this.n--;
        }
        this.moveCode();
    }




}
</script>
    
<style lang="less">

</style>