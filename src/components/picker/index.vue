<template>
<section class="vueUI-picker">
    <div @click="showMask=true;">
        <slot></slot>
    </div>
    <transition name="fade">
        <div class="vueUI-picker--mask" v-show="showMask" @click="showMask=false;"></div>
    </transition>
    <transition name="slice-bottom">
        <template v-if="mode=='multiSelector'">

            <multi-picker 
                v-show="showMask" 
                :show.sync="showMask" 
                :pickerArray="data"
                :rangeKey="rangeKey"
                v-on="$listeners"></multi-picker>
        </template>
        <template v-else-if="mode=='region'">

            <region-picker 
                v-show="showMask" 
                :show.sync="showMask" 
                v-on="$listeners"></region-picker>
        </template>
        <template v-else>

            <select-picker 
            v-show="showMask" 
            :show.sync="showMask" 
            :pickerArray="data"
            :rangeKey="rangeKey"
            v-on="$listeners"></select-picker>
        </template>

    </transition>
</section>
</template>
    
<script lang="ts">
import { Component, Vue,Prop } from 'vue-property-decorator';
import selectPicker from './selectorPicker.vue';
import multiPicker from './multiPicker.vue';
import regionPicker from './regionPicker.vue';
    
@Component({
    components:{
        selectPicker,
        multiPicker,
        regionPicker,
    }
})
export default class Picker extends Vue {

    @Prop({type:Array,default:()=>{return []}}) readonly data;
    @Prop(String) readonly rangeKey;//当传入对象数组的时候，需要指定key值
    @Prop(String) readonly mode; //picker类型：multiSelector多类; region地址选择器

    // data
    private showMask: boolean = false; //是否显示遮罩

}
</script>
    