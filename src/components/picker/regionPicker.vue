<template>
<section class="vueUI-picker-wrapper">
    <header class="vueUI-picker-header flex space-between">
        <span class="cancel" @click="cancelHandler">取消</span>
        <span class="sure theme-text-color" @click="sureHandler">确定</span>
    </header>
    <section class="vueUI-picker-content flex" ref="content">
        <div class="vueUI-picker-group flex-item" v-for="(picker,p) in pickerArray" :key="p">
            <ul class="group-wrapper" >
                <template v-if="p<3">
                    <li 
                    v-for="(item,i) in picker"
                    :key="i"
                    class="vueUI-picker-unit"
                    >
                    {{item.text}}
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
import reginJson from '@/libs/map';
@Component
export default class SelectorPicker extends Vue {

    @Prop(Boolean) readonly show;

   
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
        
            let $content = this.$refs.content;
            let $groups = ($content as any).querySelectorAll('.vueUI-picker-group .group-wrapper');
            this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
            this.lastYs = [0,2*this.unitHeight,2*this.unitHeight];
            utils.setCss($groups[1],{
                'transform':`translateY(${this.lastYs[1]}px)`
            });
            utils.setCss($groups[2],{
                'transform':`translateY(${this.lastYs[2]}px)`
            })
            
        }
    }

    

    private initData():void {
        // 初始化数据
        this.lens = [];
        
        this.pickerArray.forEach(picker=>{
            this.lens.push(picker.length);
        })
        
    }

    private setProvinceJson():void {
        let provinceJson = [];
        for(let k in reginJson['0']){
            provinceJson.push({
                text: reginJson['0'][k],
                value: k
            })
        }
        this.$set(this.pickerArray,0,provinceJson);
    }

    private setCityJson(code:number|string):void {
        this.$set(this.pickerArray,1,[]);
        let cityJson = [];
        for(let k in reginJson[code]){
            cityJson.push({
                text: reginJson[code][k],
                value: k
            })
        }
        this.$set(this.pickerArray,1,cityJson);
    }

    private setAreaJson(code:number|string):void {
        this.$set(this.pickerArray,2,[]);
        let areaJson = [];
        for(let k in reginJson[code]){
            areaJson.push({
                text: reginJson[code][k],
                value: k
            })
        }
        this.$set(this.pickerArray,2,areaJson);
    }

    created():void {
        
        let cityKey = Object.keys(reginJson['0']);
        let areaKey = Object.keys(reginJson['0,'+cityKey[2]]);
        this.setProvinceJson();
        this.setCityJson('0,'+cityKey[2]); //默认取第三个(0开始)
        this.setAreaJson('0,'+cityKey[2]+','+areaKey[0]); //默认取第一个
        console.log(this.pickerArray);
        this.initData();
        this.unitIndexs = [2,0,0];
    }
    
    mounted():void {
        let $content = this.$refs.content;
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
        }
        let offsetY = current* this.unitHeight;
        this.unitIndexs[index] = 2 - current;
        console.log(current,offsetY)
        utils.setCss(target,{
            'transform':`translateY(${offsetY}px)`
        });

        this.changeRegion(index);
    }

    private changeRegion(index:number):void {
        switch(index){
            case 0: //省份改变，需要联动改变市和区
                this.changeProvince();
            break;
            case 1: //城市改变，需要改变区
                this.changeCity();
            break;

        }
    }

    private changeProvince():void {
        let cityKey = this.pickerArray[0][this.unitIndexs[0]].value;
        let areaKey = Object.keys(reginJson['0,'+cityKey])[0];
        console.log(cityKey,areaKey)
        this.setCityJson('0,'+cityKey);
        this.setAreaJson('0,'+cityKey+','+areaKey);
        this.initData();
    }

    private changeCity():void {
        let cityKey = this.pickerArray[0][this.unitIndexs[1]].value;
        let areaKey = Object.keys(reginJson['0,'+cityKey])[0];
        console.log(cityKey,areaKey)
        this.setAreaJson('0,'+cityKey+','+areaKey);
        this.initData();
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
    