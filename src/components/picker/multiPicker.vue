<template>
<section class="vueUI-picker-wrapper">
    <header class="vueUI-picker-header flex space-between">
        <span class="cancel" @click="cancelHandler">取消</span>
        <span class="sure theme-text-color" @click="sureHandler">确定</span>
    </header>
    <section class="vueUI-picker-content flex" ref="content">
        <div class="vueUI-picker-group flex-item" >
            <ul class="group-wrapper" v-for="(picker,p) in pickerArray" :key="p">
                <template v-if="p<3">
                    <li 
                    v-for="(item,i) in picker"
                    :key="i"
                    class="vueUI-picker-unit"
                    >
                    {{rangeKey?item[rangeKey]:item}}
                    </li>
                </template>
                
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
    @Prop({type:Array,default:[]}) readonly pickerArray;
    @Prop(String) readonly rangeKey; //当传入对象数组的时候，需要指定key值
   
    private lens:Array<number> = [];

    private touch:Touch;
    private unitHeight: number; //格子的高度
    private unitIndexs: Array<number> = []; //记录当前的数组索引
    private lastYs:Array<number> = []; //记录上一次停止的位置

    // computed
    
    @Watch('show')
    showHandler(val:boolean,oldVal:boolean){
        // 由于在display:none的状态下，是获取不到元素的高度的，所以要监听show属性
        if(this.show&&!this.unitHeight){
        
            let $content = this.$refs.content;
            let $groups = ($content as any).querySelectorAll('.vueUI-picker-group');
            this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
        }
    }

    @Watch('pickerArray')
    pickerHandler(val:boolean,oldVal:boolean){
        if(val){
            this.lens = [];
            this.unitIndexs = [];
            this.lastYs = [];
            this.pickerArray.forEach(picker=>{
                this.lens.push(picker.length);
                this.unitIndexs.push(3);//默认是3
                this.lastYs.push(0); //默认距离是0
            })
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
                    
                    this.moveCb($groupWarpper,range,i)
                    },
                endCb: (e:any,range:number)=>{
                    
                    this.endCb($groupWarpper,range,i)
                    },
            })
        });
        // this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
 
        // this.len = this.pickerArray.length;

    }

    private startCb(e:any):void {

    }

    private moveCb(target:any,range:number,index:number):void {
        // console.log(range);
        
        utils.setCss(target,{
            'transform':`translateY(${this.lastYs[index]+range}px)`
        });
    }

    private endCb(target:any,endY:number,index:number):void {
        /**
         * todo:
         * 1. 判断最后落在哪个格子上
         * 2. 安全范围判断，头部不能超过(2*height);尾部不能超过-(count-3*height);
         * 3. 记得当前格子对应的数据索引，由于一列有5个格子，从0开始算，中间是2
         */
        this.lastYs[index] += endY;

        let min = this.lastYs[index] >0?Math.floor(this.lastYs[index] / this.unitHeight): Math.ceil(this.lastYs[index]/this.unitHeight);
        let max = this.lastYs[index] >0?min+1:min-1;
        let middleHeight = (min+max)/2*this.unitHeight;
        let current = 0;

        console.log(min,max,this.unitHeight,middleHeight);
        console.log(Math.abs(this.lastYs[index]))
        // 判断落在哪个格子上
        if(Math.abs(this.lastYs[index])>=Math.abs(middleHeight)){
            current = max;
        }else{
            current = min;
        }
        // 安全判断
        if(this.lastYs[index]>2*this.unitHeight){
            this.lastYs[index] = 2*this.unitHeight;
            current = 2;
        }else if(Math.abs(this.lastYs[index])>Math.abs((this.lens[index]-3)*this.unitHeight)){
            this.lastYs[index] = -(this.lens[index]-3)*this.unitHeight;
            current = -(this.lens[index]-3);
        }
        let offsetY = current* this.unitHeight;
        this.unitIndexs[index] = 2 - current;
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
        let value = [];  
        this.pickerArray.forEach((picker,i)=>{
            value.push(picker[this.unitIndexs[i]])
        })
        this.$emit('success',value);
    }


}
</script>
    