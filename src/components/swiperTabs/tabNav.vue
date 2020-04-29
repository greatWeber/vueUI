<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { CreateElement } from 'vue';

import tab from '../tab/index.vue';

@Component({
    name:'TabNav',
    components:{
        tab
    },
})
export default class TabNav extends Vue {
    @Prop({type:Array,default:[]}) panes;
    
    private tabs: Array<any> = [];

}
</script>