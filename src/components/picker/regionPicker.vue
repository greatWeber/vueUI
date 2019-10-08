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
import { Component, Vue, Prop, Watch, Mixins } from 'vue-property-decorator';
import Touch from '@/libs/touch';
import utils from '@/libs/utils';
import reginJson from '@/libs/map';
import pickerMixin from '@/mixins/picker';

@Component({name:'RegionPicker'})
export default class RegionPicker extends Mixins(pickerMixin){

    @Watch('show')
    showHandler(val:boolean,oldVal:boolean){
        // 由于在display:none的状态下，是获取不到元素的高度的，所以要监听show属性
        if (this.show&&!this.unitHeight){
            let $content = this.$refs.content;
            let $groups = ($content as any).querySelectorAll('.vueUI-picker-group .group-wrapper');
            this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
            this.lastYs =[0,100,100];
            utils.setCss($groups[1],{
                'transform':`translateY(${2*this.unitHeight}px)`
            });
            utils.setCss($groups[2],{
                'transform':`translateY(${2*this.unitHeight}px)`
            })

        }
    }

    created():void {
        let cityKey = Object.keys(reginJson['0']);
        let areaKey = Object.keys(reginJson['0,'+cityKey[2]]);
        this.setProvinceJson();
        this.setCityJson('0,'+cityKey[2]); // 默认取第三个(0开始)
        this.setAreaJson('0,'+cityKey[2]+','+areaKey[0]); // 默认取第一个
        this.initData();
        this.unitIndexs =[2,0,0];
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

    private resizeView(index:number):void {
        // 视图复位
        let $content = this.$refs.content;
        let $groups = ($content as any).querySelectorAll('.vueUI-picker-group .group-wrapper');
        this.lastYs[index] = 2*this.unitHeight
        utils.setCss($groups[index],{
            'transform':`translateY(${2*this.unitHeight}px)`
        });
    }

    private initData():void {
        // 初始化数据
        this.lens =[];
        this.pickerArray.forEach(picker=>{
            this.lens.push(picker.length);
        })
    }

    /**
     * 设置省数据
     */
    private setProvinceJson():void {
        let provinceJson =[];
        for(let k in reginJson['0']){
            provinceJson.push({
                text: reginJson['0'][k],
                value: k
            })
        }
        this.$set(this.pickerArray,0,provinceJson);
    }

    /**
     * 设置城市数据
     */
    private setCityJson(code:number|string):void {
        this.$set(this.pickerArray,1,[]);
        let cityJson =[];
        for(let k in reginJson[code]){
            cityJson.push({
                text: reginJson[code][k],
                value: k
            })
        }
        this.$set(this.pickerArray,1,cityJson);
    }

    /**
     * 设置地区数据
     */
    private setAreaJson(code:number|string):void {
        this.$set(this.pickerArray,2,[]);
        let areaJson =[];
        for(let k in reginJson[code]){
            areaJson.push({
                text: reginJson[code][k],
                value: k
            })
        }
        this.$set(this.pickerArray,2,areaJson);
    }

    private endCb(target:any,endY:number,index:number):void {
        this.commonEndCb(target,endY,index);
        this.changeRegion(index);
    }

    private changeRegion(index:number):void {
        switch(index){
            case 0: // 省份改变，需要联动改变市和区
                this.changeProvince();
            break;
            case 1: // 城市改变，需要改变区
                this.changeCity();
            break;

        }
    }

    private changeProvince():void {
        let cityKey = this.pickerArray[0][this.unitIndexs[0]].value;
        let areaKey = Object.keys(reginJson['0,'+cityKey])[0];
        // console.log(cityKey,areaKey)
        this.setCityJson('0,'+cityKey);
        this.setAreaJson('0,'+cityKey+','+areaKey);
        this.initData();
        this.resizeView(1);
    }

    private changeCity():void {
        let cityKey = this.pickerArray[0][this.unitIndexs[1]].value;
        let areaKey = Object.keys(reginJson['0,'+cityKey])[0];
        // console.log(cityKey,areaKey)
        this.setAreaJson('0,'+cityKey+','+areaKey);
        this.initData();
        this.resizeView(2);
    }

}
</script>
    