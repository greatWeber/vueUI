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
                    {{rangeKey?item[rangeKey]:item}}
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
import pickerMixin from '@/mixins/picker';

@Component
export default class MultiPicker extends Mixins(pickerMixin){

    @Prop({type:Array,default:[]}) readonly data;
    @Prop(String) readonly rangeKey; // 当传入对象数组的时候，需要指定key值

    @Watch('data')
    dataHndler(val:boolean,oldVal:boolean){
        this.pickerArray = this.data;
        this.initData();
    }
    @Watch('show')
    showHandler(val:boolean,oldVal:boolean){
        // 由于在display:none的状态下，是获取不到元素的高度的，所以要监听show属性
        if (this.show&&!this.unitHeight){
            let $content = this.$refs.content;
            let $groups = ($content as any).querySelectorAll('.vueUI-picker-group .group-wrapper');
            this.unitHeight = $groups[0].querySelector('.vueUI-picker-unit').clientHeight;
            this.initData();
            this.lens.forEach((len,i)=>{
                if (len<3){
                    utils.setCss($groups[i],{
                        'transform':`translateY(${this.lastYs[i]}px)`
                    })
                }
            })
        }
    }

    initData():void {
        // 初始化数据
        this.lens =[];
        this.unitIndexs =[];
        this.lastYs =[];
        this.pickerArray.forEach(picker=>{
            this.lens.push(picker.length);
            if (picker.length>=3){
                this.lastYs.push(0); // 默认距离是0
                this.unitIndexs.push(2);// 默认是2
            }else{
                this.lastYs.push(2*this.unitHeight); // 默认距离是0
                this.unitIndexs.push(0);

            }
        })
    }

    created():void {
        this.pickerArray = this.data;
        this.initData();
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
    }

}
</script>
    