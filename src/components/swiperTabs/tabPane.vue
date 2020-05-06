<template>
<div 
    class="vueUI-tab-pane"
    v-if="loaded"
    v-show="active"
    :id="`pane-${name}`">
    <slot></slot>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch ,Emit} from 'vue-property-decorator';
import { CreateElement} from 'vue';

Component({
    name:'TabPane',
    computed:{
        active(){
            const active :Boolean = this.$parent.currentName === this.name;
            if(active) this.loaded = true;
            return active;
        }
    },
    updated(){
        this.$parent.$emit('tab-nav-update');
    }

})
export default class TabPane extends Vue {
    @Prop({type:String,default:''}) name: String;
    @Prop({type:String,default:''}) label: String;

    private loaded: Boolean = false; 

}
</script>
