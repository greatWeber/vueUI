<template>
<section class="vueUI-picker-wrapper">
    <header class="vueUI-picker-header flex space-between">
        <span class="cancel">取消</span>
        <span class="sure theme-text-color">确定</span>
    </header>
    <section class="vueUI-picker-content flex">
        <div class="vueUI-picker-group flex-item" ref="group">
            <ul class="group-wrapper">
                <li class="vueUI-picker-unit">测试1</li>
                <li class="vueUI-picker-unit">测试2</li>
                <li class="vueUI-picker-unit">测试3</li>
                <li class="vueUI-picker-unit">测试4</li>
                <li class="vueUI-picker-unit">测试5</li>
            </ul>
        </div>
        
    </section>
</section>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component
export default class SelectorPicker extends Vue {

}
</script>
    