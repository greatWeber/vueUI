<template>
<div>
    <h2 class="title">mini size</h2>
    <vu-button class="btn">按钮</vu-button>
    <h2 class="title">small size</h2>
    <vu-button class="btn" size="small">按钮</vu-button>
    <h2 class="title">medium size</h2>
    <vu-button class="btn" size="medium" @click="clickHandler">按钮</vu-button>
    <h2 class="title">round 圆角</h2>
    <vu-button class="btn" size="medium" round @click="clickHandler">按钮</vu-button>
    <h2 class="title">plain type</h2>
    <vu-button class="btn" size="medium" round plain type="primary">按钮</vu-button> 
    <h2 class="title">primary type</h2>
    <vu-button class="btn" size="medium" round type="primary">按钮</vu-button>
    <h2 class="title">success type</h2>
    <vu-button class="btn" size="medium" round type="success">按钮</vu-button>
    <h2 class="title">info type</h2>
    <vu-button class="btn" size="medium" round type="info">按钮</vu-button>
    <h2 class="title">warning type</h2>
    <vu-button class="btn" size="medium" round type="warning">按钮</vu-button>
    <h2 class="title">danger type</h2>
    <vu-button class="btn" size="medium" round type="danger">按钮</vu-button>
    <h2 class="title">loading</h2>
    <vu-button class="btn" size="medium" round loading>按钮</vu-button>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Button extends Vue {

    private clickHandler():void {
        // alert(123)
    }
}
</script>

<style lang="less">

.btn {
    margin: 0.2rem auto;
    display: block;
}
</style>
    