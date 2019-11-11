<template>
<section style="overflow:hidden;">
<div class="search-wrapper flex">
    <div :class="type=='round'?'search-round':''" class="search-content" >
        <span class="icon icon-search"></span>
        <input type="text" class="search-input" :placeholder="placeholder" v-model="searchKey" @change="changeHandler">
        <span class="cancel icon icon-error" v-show="searchKey" @click="cancelHandler"></span>
    </div>
    <p class="search-btn" @click="searchHandler">搜索</p>
</div>
</section>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name:'Search'
})
export default class Search extends Vue {
    @Prop(String) readonly value;
    @Prop({type:String,default:'请输入关键字'}) readonly placeholder;
    @Prop(String) readonly type; // round(圆角)

    private searchKey :string = '';

    @Watch('value')
    valueHandler(){
        this.searchKey = this.value;
    }

    private changeHandler():void {
        this.$emit('input',this.searchKey);
    }

    private searchHandler():void{
        if(!this.searchKey){
            (this as any).$toast.error('请输入搜索关键字');
            return;
        }
        this.$emit('search',this.searchKey);
    }

    private cancelHandler():void{
        this.searchKey = '';
        this.changeHandler();
        this.$emit('clear');
    }
}
</script>
    
<style lang="less" scoped>
.search-wrapper {
    // width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0.2rem;

    
    .search-content {
        position: relative;
        padding:  0 0.2rem;
        background: #f5f5f5;
        border-radius: 2px;
        flex: 1;
        * {
            display: inline-block;
            vertical-align: middle;
        }
    }
    .search-round {
        border-radius: 0.3rem;
    }
    .search-input {
        border: none;
        background: #f5f5f5;
        width: 80%;
        margin-left: 0.1rem;
    }

    .cancel {
        position: absolute;
        right: 0.1rem;
        // top: 0.2rem;
    }

    .search-btn {
        font-size: 14px;
        margin-left: 0.2rem;
        color: #666;
    }
}
</style>