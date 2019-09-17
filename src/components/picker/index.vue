<template>
<div class="vueUI-picker">
    <slot></slot>
    <div class="vueUI-picker--mask"></div>
    <select-picker></select-picker>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import selectPicker from './selectorPicker.vue';
    
@Component({
    components:{
        selectPicker
    }
})
export default class Picker extends Vue {


    // data
    private showMask: boolean = false; //是否显示遮罩
}
</script>
    