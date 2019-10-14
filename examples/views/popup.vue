<template>
<div>
    <vueUI-popup :showPopup.sync="showPopup"></vueUI-popup>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Popup extends Vue {
    private showPopup: boolean = true;
}
</script>
    
<style lang="less" scoped>
</style>