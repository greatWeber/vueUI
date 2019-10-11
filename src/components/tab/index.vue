<template>
<div class="vueUI-tab">
    <ul class="vueUI-tab-flex flex space-around" v-if="tabs.length<=3">
        <li 
        class="vueUI-tab-item " 
        :class="[TabIndex==i?'vueUI-tab-active':'']" 
        @click="clickHandler(i)"
        v-for="(item,i) in tabs" :key="i">
            {{item[tabKey]}}</li>
    </ul>
    <div class="vueUI-tab-content" v-else>
        <ul class="vueUI-tab-more flex " >
            <li 
            v-show="!openFlag"
            class="vueUI-tab-item " 
            :class="[TabIndex==i?'vueUI-tab-active':'']" 
            @click="clickHandler(i)"
            v-for="(item,i) in tabs" :key="i">
                {{item[tabKey]}}</li>
        </ul>
        <p class="vueUI-tab-btn" @click="openFlag=!openFlag">
            <span class="icon icon_down"></span>
        </p>

        <ul class="vueUI-tab-wrapper "  v-show="openFlag">
            <li 
            class="vueUI-tab-item " 
            :class="[TabIndex==i?'vueUI-tab-act':'']" 
            @click="clickHandler(i)"
            v-for="(item,i) in tabs" :key="i">
                {{item[tabKey]}}</li>
        </ul>
    </div>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
/**
 * 逻辑：
 * 当tab长度<=3的时候，采用flex布局；当大于3的时候，显示下拉按钮，点击显示更多
 */
@Component({
    name:'Tab',
    created(){
        this.TabIndex = this.tabIndex;
    }
})
export default class Tab extends Vue {
    @Prop({type:Array,default:()=>{return []}}) readonly tabs;
    @Prop({type:[Number,String],default:0}) readonly tabIndex;
    @Prop({type:String,default:'label'}) readonly tabKey; // 自定义key值

    private TabIndex :Number|String = 0;
    private openFlag :Boolean = false;

    private clickHandler(i:number){
        this.TabIndex = i;
        this.$emit('tabIndex:update',i);
        this.$emit('tab-click',this.tabs[i])
    }
}
</script>
    
<style lang="less" scoped>

</style>