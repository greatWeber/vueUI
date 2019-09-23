<template>
<section class="vueUI-picker-wrapper">
    <header class="vueUI-picker-header flex space-between">
        <span class="cancel" @click="cancelHandler">取消</span>
        <span class="sure theme-text-color" @click="sureHandler">确定</span>
    </header>
    <section class="vueUI-picker-content flex" ref="content">
        <div class="vueUI-picker-group flex-item" >
            <ul class="group-wrapper">
                <li 
                v-for="(item,i) in pickerArray"
                :key="i"
                class="vueUI-picker-unit"
                >{{item}}</li>
                
            </ul>
        </div>
        
    </section>
</section>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Touch from './touch';
import utils from '@/libs/utils';
@Component
export default class SelectorPicker extends Vue {

    @Prop(Boolean) readonly show;

    private pickerArray:Array<any> = ['测试1','测试2','测试3','测试4','测试5'];
    private len:number = 0;

    private touch:Touch;
    private unitHeight: number; //格子的高度
    private unitIndex: number = 3; //记录当前的数组索引
    private lastY:number = 0; //记录上一次停止的位置

    // computed
    
    @Watch('show')
    showhandler(val:boolean,oldVal:boolean){
        // 由于在display:none的状态下，是获取不到元素的高度的，所以要监听show属性
        if(this.show&&!this.unitHeight){
        
            let $content = this.$refs.content;
            let $groups = ($content as any).querySelectorAll('.vueUI-picker-group');
            this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
        }
    }
    
    mounted():void {
        let $content = this.$refs.content;
        console.log($content);
        let $groups = ($content as any).querySelectorAll('.vueUI-picker-group');
        Array.prototype.slice.call($groups).forEach((group,i)=>{
            let $groupWarpper = group.querySelector('.group-wrapper');
            this.touch = new Touch(group);
            this.touch.init({
                startCb: (e:any)=>{this.startCb(group)},
                moveCb: (e:any,range:number)=>{
                    
                    this.moveCb($groupWarpper,range)
                    },
                endCb: (e:any,range:number)=>{
                    
                    this.endCb($groupWarpper,range)
                    },
            })
        });
        // this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
 
        this.len = this.pickerArray.length;

    }

    private startCb(e:any):void {

    }

    private moveCb(target:any,range:number):void {
        // console.log(range);
        
        utils.setCss(target,{
            'transform':`translateY(${this.lastY+range}px)`
        });
    }

    private endCb(target:any,endY:number):void {
        /**
         * todo:
         * 1. 判断最后落在哪个格子上
         * 2. 安全范围判断，头部不能超过(2*height);尾部不能超过-(count-3*height);
         * 3. 记得当前格子对应的数据索引，由于一列有5个格子，从0开始算，中间是2
         */
        this.lastY += endY;

        let min = this.lastY >0?Math.floor(this.lastY / this.unitHeight): Math.ceil(this.lastY/this.unitHeight);
        let max = this.lastY >0?min+1:min-1;
        let middleHeight = (min+max)/2*this.unitHeight;
        let current = 0;

        console.log(min,max,this.unitHeight,middleHeight);
        console.log(Math.abs(this.lastY))
        // 判断落在哪个格子上
        if(Math.abs(this.lastY)>=Math.abs(middleHeight)){
            current = max;
        }else{
            current = min;
        }
        // 安全判断
        if(this.lastY>2*this.unitHeight){
            this.lastY = 2*this.unitHeight;
            current = 2;
        }else if(Math.abs(this.lastY)>Math.abs((this.len-3)*this.unitHeight)){
            this.lastY = -(this.len-3)*this.unitHeight;
            current = -(this.len-3);
        }
        let offsetY = current* this.unitHeight;
        this.unitIndex = 2 - current;
        console.log(current,offsetY)
        utils.setCss(target,{
            'transform':`translateY(${offsetY}px)`
        });
    }

    private cancelHandler():void {
        this.$emit('update:show',false);
    }

    private sureHandler():void {
        this.$emit('update:show',false);
        this.$emit('success',this.pickerArray[this.unitIndex]);
    }


}
</script>
    