<template>
<section class="tabbar-wrapper flex align-center">
    <router-link class="tabbar-item" :class="tabIndex==i?'tabbar-act':''" :to="item.href" v-for="(item,i) in tabList" :key="i" @click.native="changeTab(i)">
        <img v-if="item.img" :src="item.img" alt="" class="tabbar-img">
        <span v-if="item.icon" class="icon tabbar-icon" :class="item.icon"></span>
        <p class="tabbar-name">{{item.title}}</p>
    </router-link>
</section>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name:'Tabbar',
    mounted(){
        console.log(this.$route);
        if(!this.$route||!this.tabList) return;
        this.tabList.forEach((tab,i)=>{
            if((tab.href&&(tab.href.name==this.$route.name)) || (tab.href&&(tab.href.path==this.$route.path))){
                this.tabIndex = i;
            }
        })
    }
})
export default class Tabbar extends Vue {
    @Prop(Array) readonly tabList;

    private tabIndex: number= 0;

    private changeTab(i){
        this.tabIndex = i;
    }
}
</script>
    
<style lang="less" scoped>

</style>