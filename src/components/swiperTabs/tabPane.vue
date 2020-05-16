<template>
<div 
    class="vueUI-tab-pane"
    v-if="loaded"
    v-show="active"
    :id="`pane-${label}`">
    <slot></slot>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch ,Emit} from 'vue-property-decorator';
import { CreateElement} from 'vue';

@Component({
    name:'TabPane',
    computed:{
        active(){
            //console.log('currentName',this.$parent)
            const active :Boolean = this.$parent.currentName === this.label;
            if(active) this.loaded = true;
            return active;
        }
    },
    mounted(){
        
    },
    updated(){
        this.$parent.$emit('tab-nav-update');
    }

})
export default class TabPane extends Vue {
    // @Prop({type:String,default:''}) name: String;
    @Prop({type:String,default:''}) label: String;

    private loaded: Boolean = false;
    
    @Watch('this.$parent.currentName',{immediate:true,deep:true})
    currentNameWatcher(val:String){
        console.log('currentName',val);
    }

}
</script>
