<template>
<div>
    <div class="flex space-between" style="padding: 0.2rem;">
        <span>计步器</span>
        <vu-stepper v-model="num"></vu-stepper>
    </div>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Stepper extends Vue {
    private num: number = 1;
}
</script>
    
<style lang="less" scoped>
</style>