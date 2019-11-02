<template>
<ul>
    <li class="list-item">
        <vu-badge><span class="text">我的订单</span></vu-badge> 
    </li>
    <li class="list-item">
        <vu-badge>
            <vu-button class="btn" size="mini">按钮</vu-button>
        </vu-badge> 
    </li>
    <li class="list-item">
        <vu-badge type="number" num="99"><span class="text">我的订单</span></vu-badge> 
    </li>
    <li class="list-item">
        <vu-badge type="number" num="100"><vu-button class="btn" size="mini">订单</vu-button></vu-badge> 
    </li>
</ul>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Badge extends Vue {

}
</script>
    
<style lang="less" scoped>
.list-item {
    padding: 0.3rem;
    border-bottom: 1px solid #eee;
}

.text {
    line-height: 0.5rem;
}
</style>