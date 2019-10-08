<template>
<div class="vueUI-badge">
    <slot></slot>
    <span class="badge-point"></span>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Badge extends Vue {}
</script>
    
<style lang="less" scoped>

</style>