<template>
<div>
    <h2 class="title">ballSpanFade type</h2>
    <p class="cell">
        <vu-button @click="loadingHandler('ballSpanFade')">点击加载</vu-button>
    </p>
    <h2 class="title">ballTrianglePath type</h2>
    <p class="cell">
        <vu-button @click="loadingHandler('ballTrianglePath')">点击加载</vu-button>
    </p>
    <h2 class="title">lineScale type</h2>
    <p class="cell">
        <vu-button @click="loadingHandler('lineScale')">点击加载</vu-button>
    </p>
    <h2 class="title">lineSpin type</h2>
    <p class="cell">
        <vu-button @click="loadingHandler('lineSpin')">点击加载</vu-button>
    </p>
    <h2 class="title">pacman type</h2>
    <p class="cell">
        <vu-button @click="loadingHandler('pacman')">点击加载</vu-button>
    </p>
    <h2 class="title">squareJellyBox type</h2>
    <p class="cell">
        <vu-button @click="loadingHandler('squareJellyBox')">点击加载</vu-button>
    </p>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Loading extends Vue {

    private loadingHandler(type):void {
        (this as any).$loading.show('',type);
        setTimeout(()=>{
            (this as any).$loading.hide();
        },2000)
    }
}
</script>
    
<style lang="less" scoped>
.cell {
    padding: 0.2rem;
}
</style>