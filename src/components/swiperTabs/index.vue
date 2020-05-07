<script lang="tsx">
import { Component, Vue, Prop, Watch, Provide } from 'vue-property-decorator';
import { CreateElement } from 'vue';

interface ComponentData {
    props?: Object,
    ref?: String,
}

@Component({
    name:'SwiperTabs',
    mounted(){},
    render(h: CreateElement){
        let {

        } = this;

        const navData :ComponentData = {
            props:{},
            ref: 'tab-nav'
        };
        const header :any = (
            <div class="vueUI-swiper-tab__header">
                 
            </div>
        )
        return (
            <div class="vueUI-swiper-tab">
                {header}
            </div>
            
        );
    },
})
export default class swiperTabs extends Vue {

    @Prop({type:String,default:''}) value: String;


    @Provide() rootTabs = this;

    private currentName: String = this.value;
    private panes: Array<any> = [];

    @Watch('value')
    valueWatch(val:String){
        this.setCurrentName(val);
    }

    //methods
    private setCurrentName(val: String):void{};

    // get the pane instance
    private calcPaneInstances(isForceUpdate:Boolean = false):void{
        if(this.$slots.default){
            const paneSlots = this.$slots.default.filter(vnode=>
                            vnode.tag && 
                            vnode.componentOptions &&
                            (vnode.componentOptions.Ctor as any).options.name === 'TabPane' );
                            
            const panes = paneSlots.map(({componentInstance})=>componentInstance);
            const panesChanged = !(panes.length === this.panes.length && panes.every((pane,index)=>pane === this.panes[index]));
            if(isForceUpdate || panesChanged){
                this.panes = panes;
            }

        }else if(this.panes.length !== 0){
            this.panes = [];
        }
    }


}

</script>>