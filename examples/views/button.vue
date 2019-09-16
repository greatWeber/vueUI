<template>
<div>
    <vueUI-button class="btn">按钮</vueUI-button>
    <vueUI-button class="btn" size="small">按钮</vueUI-button>
    <vueUI-button class="btn" size="medium" @click="clickHandler">按钮</vueUI-button>
    <vueUI-button class="btn" size="medium" round loading @click="clickHandler">按钮</vueUI-button>
    <vueUI-button class="btn" size="medium" round plain>按钮</vueUI-button> 
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Button extends Vue {

    private clickHandler():void {
        alert(123)
    }
}
</script>

<style lang="less">
.btn {
    margin: 0.1rem;
    display: block;
}
</style>
    