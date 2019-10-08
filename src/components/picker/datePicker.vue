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
import { Component, Vue, Prop, Watch, Mixins } from 'vue-property-decorator';
import Touch from '@/libs/touch';
import utils from '@/libs/utils';
import pickerMixin from '@/mixins/picker';

@Component({name:'DatePicker'})
export default class DatePicker extends Mixins(pickerMixin) {

    @Prop(Boolean) readonly show;
    @Prop({type:[String,Number],default:1999}) readonly startYear;
    @Prop({type:[String,Number],default:2030}) readonly endYear;

    public pickerArray: Array<any> =[];
    
    @Watch('show')
    showHandler(val:boolean,oldVal:boolean){
        // 由于在display:none的状态下，是获取不到元素的高度的，所以要监听show属性
        if (this.show&&!this.unitHeight){
            this.initData(); 
            let _this = this;
            setTimeout(()=>{
                let $content = this.$refs.content;
                let $groups = ($content as any).querySelectorAll('.vueUI-picker-group .group-wrapper');
                this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
                this.lens.forEach((len,i)=>{
                    _this.lastYs[i] = -(_this.unitIndexs[i]-2)*_this.unitHeight;
                    utils.setCss($groups[i],{
                        'transform':`translateY(${_this.lastYs[i]}px)`
                    })  
                })
            },10)
        }
    }

    @Watch('pickerArray')
    pickerHandler(val:boolean,oldVal:boolean){
        if (val){
            this.initData();
        }
    }

    private initData():void {
        // 初始化数据
        this.lens =[];
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
        let yearRange = year - this.startYear ;
        let monthRange = month ;
        let dayRange = day -1;
        this.unitIndexs =[yearRange,monthRange,dayRange];
        console.log(this.unitIndexs);
    }

    /**
     * 设置年份
     */
    private setYearArray():void {
        let years =[];
        for(let i=this.startYear;i<=this.endYear;i++){
            years.push(i);
        }
        this.$set(this.pickerArray,0,years);
    }

    /**
     * 设置月份
     */
    private setMonthArray():void {
        let months =[];
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
        let days =[];
        let counts = new Date(
            this.pickerArray[0][this.unitIndexs[0]],
            this.pickerArray[1][this.unitIndexs[1]],0).getDate();

        for(let i=1;i<=counts;i++){
            days.push(i>=10?i:'0'+i)
        }
        // console.log(this.pickerArray);
        // console.log(this.unitIndexs);
        // console.log(this.pickerArray[0][this.unitIndexs[0]],
        // this.pickerArray[1][this.unitIndexs[1]],0 );
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
        let $groups = ($content as any).querySelectorAll('.vueUI-picker-group');
        Array.prototype.slice.call($groups).forEach((group,i)=>{
            let $groupWarpper = group.querySelector('.group-wrapper');
            this.touch = new Touch(group);
            this.touch.init({
                startCb: (e:any)=>{this.startCb($groupWarpper)},
                moveCb: (e:any,range:number)=>{
                    this.moveCb($groupWarpper,range,i)
                    },
                endCb: (e:any,range:number)=>{
                    this.endCb($groupWarpper,range,i)
                    },
            })
        });
    }


    private endCb(target:any,endY:number,index:number):void {
        this.commonEndCb(target,endY,index);
        // 动态修改天数
        if (index!=2){
            this.setDayArray();
        }
    }

}
</script>
    