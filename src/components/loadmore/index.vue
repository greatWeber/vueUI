<template>
  <div class="vue-loadmore-wrapper"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div class="refresh-inner" ref="refresh" v-show="type=='all'||type=='refresh'">
      <div class="refresh-pull" v-show="state==='pull'">
        <span>{{refreshPullText}}</span>
      </div>
      <div class="refresh-loading" v-show="state==='loading'">
        <span>{{refreshLoadingText}}</span>
      </div>

      <div class="refresh-end" v-show="state==='end'">
        <span>{{refreshEndText}}</span>
      </div>
    </div>
    <div class="vueUI-loadmore-content">
      <slot></slot>
    </div>
    <div class="vueUI-loadmore-foot" v-show="type=='all'||type=='loadmore'">
        <p class="loadmore-text" v-show="loadmoreState=='pull'" @click="loadmoreHandler">{{loadmorePullText}}</p>
        <p class="loadmore-text" v-show="loadmoreState=='loading'" >{{loadmoreLoadingText}}</p>
        <p class="loadmore-text" v-show="loadmoreState=='end'" >{{loadmoreEndText}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({
    name:'Loadmore',
})
export default class Loadmore extends Vue {

    @Prop({type:String,default:'all'}) readonly type; // 类型： all: 所有；refresh: 下拉刷新；loadmore: 点击加载更多
    @Prop({type:Number,default:100}) readonly maxRange; // 下拉最大的距离
    @Prop({type:Boolean,default:false}) readonly allLoad; // 是否全部加载完成
    @Prop({type:String,default:'下拉刷新-.-'}) readonly refreshPullText;
    @Prop({type:String,default:'刷新中...~.~'}) readonly refreshLoadingText;
    @Prop({type:String,default:'刷新完成!^.^'}) readonly refreshEndText;

    @Prop({type:String,default:'点击加载更多'}) readonly loadmorePullText;
    @Prop({type:String,default:'加载中...~.~'}) readonly loadmoreLoadingText;
    @Prop({type:String,default:'没有数据'}) readonly loadmoreEndText;
    
    private startY: number = 0;
    private allow: boolean = true;
    private translate: number = 0;
    private state: string = 'pull'; // pull,loading, end
    private loadmoreState: string = 'pull';// pull,loading, end
    private currentNode: Element = null;
    private firstNode :Element = null;
    private rotate: number = 0;

    @Watch('allLoad')
    allLoadHandler(){
        if(this.allLoad){
            this.loadmoreState = 'end'
        }else{
            this.loadmoreState = 'pull';
        }
    }

    private isIOS():boolean{
        let u = navigator.userAgent, app = navigator.appVersion;
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        return isIOS;
    }

    private getTouchTarget(elm):void{
        let currentNode = elm;
        while(currentNode && currentNode.tagName !== "HTML" &&
            currentNode.tagName !== "BODY" && currentNode.nodeType === 1){
            let overflowY = window.getComputedStyle(currentNode).overflowY;
            if(overflowY === "scroll" || overflowY === "auto"){
                this.currentNode = currentNode;
                this.firstNode = currentNode.firstElementChild;
                break;
            }
            currentNode = currentNode.parentNode;
        }
        
    }

    private touchStart(e):void{
        if(this.state === 'loading') return;
        this.startY = e.touches[0].clientY;
        this.getTouchTarget(e.target);
        console.log(this.allow)
    }
    private touchMove(e):void{
        let firstTop=0,  currentTop=0;
        if(this.firstNode){ 
            firstTop = this.firstNode.getBoundingClientRect().top;
            currentTop = this.currentNode.getBoundingClientRect().top;	
        }
            let range = (e.touches[0].clientY - this.startY);
        if( document.documentElement.scrollTop>0 || this.state === 'loading' || firstTop-currentTop <0 || range<0) return;

        range = range*0.75 > this.maxRange? this.maxRange : range;
        
        this.translate = range;
        this.changeView();

    }
    private touchEnd(e):void{
        if(this.state === 'loading') return;

        if(this.translate && this.translate >= this.maxRange){
            this.translate = this.maxRange;  
            this.refresh();
        }else{
            this.translate = 0;
        }
        this.rotate = 0;
        this.changeView();
    }

    private refresh():void{
        this.state = 'loading';
        console.log('更新中...');
        this.$emit('refresh');

    }
     /**
     * 加载完成后手动调用该方法关闭刷新
     */
    private refreshEnd():void{
        let _this = this;
        this.state = 'end';

        setTimeout(()=>{

            _this.translate = 0;
            _this.changeView();
        },1000);

        setTimeout(()=>{
            _this.state = 'pull';
        },1300)
        
        console.log('更新完成...');
    }

    private changeView():void{
        (this.$refs.refresh as any).style.transform=`translate3d(0,${this.translate}px,0)`;
        
    }

    private loadmoreHandler():void {
        this.loadmoreState = 'loading';
        this.$emit('loadmore');
    }

    /**
     * 加载完成后手动调用该方法关闭加载
     */
    private loadmoreEnd():void {
        this.loadmoreState = 'pulling';
    }

}

</script>

<style lang="less" scoped>

</style>