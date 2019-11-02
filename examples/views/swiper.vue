<template>
<div>
    <vu-swiper :data="imgArr">
        <span slot-scope="swiper">{{swiper}}</span>
    </vu-swiper>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Swiper extends Vue {
    private imgArr: Array<any> =[
        'https://w.wallhaven.cc/full/j5/wallhaven-j5dvww.jpg',
        'https://w.wallhaven.cc/full/13/wallhaven-132lqw.png'
    ];
}
</script>
    
<style lang="less" scoped>
</style>