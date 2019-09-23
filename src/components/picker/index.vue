<template>
<section class="vueUI-picker">
    <div @click="showMask=true;">
        <slot></slot>
    </div>
    <transition name="fade">
        <div class="vueUI-picker--mask" v-show="showMask" @click="showMask=false;"></div>
    </transition>
    <transition name="slice-bottom">
        <select-picker v-show="showMask" :show.sync="showMask" v-on="$listeners"></select-picker>
    </transition>
</section>
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
    