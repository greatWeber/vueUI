<template>
<div>
    <h2 class="title">mini size</h2>
    <p class="cell">
        <vu-switch size="mini"></vu-switch>
    </p>
    <h2 class="title">small size</h2>
    <p class="cell">
        <vu-switch size="small"></vu-switch>
    </p>
    <h2 class="title">medium size</h2>
    <p class="cell">
        <vu-switch size="medium"></vu-switch>
    </p>
    <h2 class="title">different color</h2>
    <p class="cell">
        <vu-switch size="medium" color="#ed8553"></vu-switch>
    </p>
    <p class="cell">
        <vu-switch size="medium" color="#53dfed"></vu-switch>
    </p>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
    
@Component
export default class Switchs extends Vue {}
</script>
    
<style lang="less" scoped>

.cell {
    padding: 0.2rem;
}
</style>