<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { CreateElement } from 'vue';

import tab from '../tab/index.vue';

@Component({
    name:'TabNav',
    components:{
        tab
    },
    render(h:CreateElement){
        let {
            tabs,
            tabIndex,
        } = this;
        return (
            <tab
                tabs={tabs}
                tabIndex={tabIndex}
            ></tab>
        )
    }
})
export default class TabNav extends Vue {
    @Prop({type:Array,default:[]}) panes: Array<any>;
    @Prop({type:[String,Number],default:0}) tabIndex: String|Number;
    
    private tabs: Array<any> = [];


    @Watch('panes',{immediate:true})
    panesWatch(val:Array<any>, oldVal:Array<any>){
        let rs = [];
        val.map(m=>rs.push(m.label));
        this.tabs = rs;
    }


}
</script>