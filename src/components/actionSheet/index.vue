<template>
<section class="vueUI-actionsheet">
    <transition name="fade">
        <div class="vueUI-mask" v-show="show" @click="show=false;"></div>
    </transition>

    <transition name="slice-bottom">
        <div class="vueUI-actionsheet-wrapper" v-show="show">
            <ul class="vueUI-actionsheet-content" >
                <li class="vueUI-actionsheet-item" 
                    v-for="(item,i) in menu" :key="i"
                    :style="{color: item.color||'initial'}">{{item.text}}</li>

            </ul>
            <p class="vueUI-actionsheet-cancel" @click="show=false;">取 消</p>
        </div>
    </transition>
</section>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class ActionSheet extends Vue {

    @Prop({type:Array,default:()=>{return[]}}) readonly menu;
    @Prop(Boolean) readonly value;

    private show: boolean = false;

    @Watch('show')
    showHandler(val:boolean,oldVal:boolean){
        this.$emit('input',val); //实现v-model
    }

    @Watch('value')
    valueHandler(val:boolean,oldVal:boolean){
        this.show = val;
    }

}
</script>
    
<style lang="less" scoped>

</style>