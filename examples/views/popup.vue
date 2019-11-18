<template>
<div style="overflow:hidden;">
    <h2 class="title">fade</h2>
    <vu-button class="btn" size="small" round @click="showPopup=true;position='fade'">点击打开弹层</vu-button>
    <h2 class="title">left</h2>
    <vu-button class="btn" size="small" round @click="showPopup=true;position='left';">点击打开弹层</vu-button>
    <h2 class="title">right</h2>
    <vu-button class="btn" size="small" round @click="showPopup=true;position='right';">点击打开弹层</vu-button>
    <h2 class="title">top</h2>
    <vu-button class="btn" size="small" round @click="showPopup=true;position='top';">点击打开弹层</vu-button>
    <h2 class="title">bottom</h2>
    <vu-button class="btn" size="small" round @click="showPopup=true;position='bottom';">点击打开弹层</vu-button>
    <vu-popup :showPopup.sync="showPopup" :position="position">
        <h2 class="popup-title">我是弹层</h2>
    </vu-popup>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Popup extends Vue {
    private showPopup: boolean = false;
    private position: string = 'fade';
}
</script>
    
<style lang="less" scoped>
.btn {
    display: block;
    margin: 0.2rem auto;
}

.popup-title {
    text-align: center;
    line-height: 2;
}
</style>