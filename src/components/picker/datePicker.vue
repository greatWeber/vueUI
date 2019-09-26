<template>
<section class="vueUI-picker-wrapper">
    <header class="vueUI-picker-header flex space-between">
        <span class="cancel" @click="cancelHandler">取消</span>
        <span class="sure theme-text-color" @click="sureHandler">确定</span>
    </header>
    <section class="vueUI-picker-content flex" ref="content">
        <div class="vueUI-picker-group flex-item" v-for="(picker,p) in pickerArray" :key="p">
            <ul class="group-wrapper" >
                <li 
                v-for="(item,i) in picker"
                :key="i"
                class="vueUI-picker-unit"
                >
                {{item}}
                </li>
                
                
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
    @Prop({type:[String,Number],default:1999}) readonly startYear;
    @Prop({type:[String,Number],default:2030}) readonly endYear;
   
    private pickerArray: Array<any> = [];
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
        
           
            this.initData(); 
            let _this = this;
            setTimeout(()=>{
                
                let $content = this.$refs.content;
                let $groups = ($content as any).querySelectorAll('.vueUI-picker-group .group-wrapper');
                this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
                this.lens.forEach((len,i)=>{
                    _this.lastYs[i] = -(_this.unitIndexs[i]-3)*_this.unitHeight;
                    utils.setCss($groups[i],{
                        'transform':`translateY(${_this.lastYs[i]}px)`
                    })
                    
                })
            },10)
        }
    }

    @Watch('pickerArray')
    pickerHandler(val:boolean,oldVal:boolean){
        if(val){
            this.initData();
        }
    }

    private initData():void {
        // 初始化数据
        this.lens = [];
        this.pickerArray.forEach(picker=>{
            this.lens.push(picker.length);
        })
    }

    /**
     * 根据当前时间设置默认的视图
     */
    private setTodayView():void {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let yearRange = year - this.startYear +1;
        let monthRange = month +1;
        let dayRange = day;
        this.unitIndexs = [yearRange,monthRange,dayRange];
        console.log(this.unitIndexs);
    }

    /**
     * 设置年份
     */
    private setYearArray():void {
        let years = [];
        for(let i=this.startYear;i<=this.endYear;i++){
            years.push(i);
        }
        this.$set(this.pickerArray,0,years);
    }

    /**
     * 设置月份
     */
    private setMonthArray():void {
        let months = [];
        for(let i=1;i<=12;i++){
            months.push(i>=10?i:'0'+i);
        }
        this.$set(this.pickerArray,1,months);
    }

    private setDayArray():void {
        /**
         * todo:
         * 1. 获取当前选择的年份和月份
         * 2. 通过new Date(year,month,0).getDate()获取当月的天数
         */
        let days = [];
        let counts = new Date(
            this.pickerArray[0][this.unitIndexs[0]],
            this.pickerArray[1][this.unitIndexs[1]],0).getDate();
        
        for(let i=1;i<=counts;i++){
            days.push(i>=10?i:'0'+i)
        }
        console.log(this.pickerArray);
        console.log(this.unitIndexs);
        console.log(this.pickerArray[0][this.unitIndexs[0]],
            this.pickerArray[1][this.unitIndexs[1]],0)
        this.$set(this.pickerArray,2,days);


    }

    created():void {
        this.setYearArray();
        this.setMonthArray();
        this.setTodayView();
        this.setDayArray();
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

        // this.initData();

    }

    private startCb(e:any):void {

    }

    private moveCb(target:any,range:number,index:number):void {
        
        
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
         * 4. 修改年月后，天数是会动态变化的
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
        let maxLen = 0;
        if(this.lens[index]<3){
            maxLen = this.lens[index]; 
        }else{
            maxLen = this.lens[index]-3;
        }
        if(this.lastYs[index]>2*this.unitHeight){
            this.lastYs[index] = 2*this.unitHeight;
            current = 2;
        }else if(this.lastYs[index]<0&&Math.abs(this.lastYs[index])>Math.abs((maxLen)*this.unitHeight)){
            this.lastYs[index] = -(this.lens[index]-3)*this.unitHeight;
            current = -(this.lens[index]-3);
        }else if(Math.abs(this.lastYs[index])+2*this.unitHeight>Math.abs((maxLen)*this.unitHeight)&&maxLen<3&&this.unitIndexs[index]<=maxLen){
            this.lastYs[index] = (3- maxLen)*this.unitHeight;
            current = 3- maxLen;
        }
        let offsetY = current* this.unitHeight;
        this.unitIndexs[index] = 2 - current;
        console.log(current,offsetY)
        utils.setCss(target,{
            'transform':`translateY(${offsetY}px)`
        });
        // 动态修改天数
        if(index!=2){
            this.setDayArray();
        }
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
    