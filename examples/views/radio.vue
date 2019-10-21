<template>
<div>
    <vueUI-radio-group v-model="radio">

        <vueUI-radio  label="1">单选按钮</vueUI-radio>
        <vueUI-radio  label="2">单选按钮</vueUI-radio>
    </vueUI-radio-group>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class Radio extends Vue {
    private radio: string = '0';
}
</script>
    
<style lang="less" scoped>
</style>