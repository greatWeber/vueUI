<script lang="tsx">
import { Component, Vue, Prop, Watch, Provide } from 'vue-property-decorator';
import { CreateElement } from 'vue';

import tabNav from './tabNav.vue';

interface ComponentData {
    props?: Object,
    ref?: String
}

@Component({
    name:'SwiperTabs',
    mounted(){
        this.calcPaneInstances();
    },
    components:{
        tabNav
    },
    render(h: CreateElement){
        let {
            panes,
            handleTabClick
        } = this;

        const navData :ComponentData = {
            props:{
                panes: panes,
                tabClick:handleTabClick,
            },
            
            ref: 'tab-nav'
        };
        const header :any = (
            <div class="vueUI-swiper-tab__header">
                 <tab-nav 
                 {...navData}
                 ></tab-nav>
            </div>
        )

        const panels = (
            <div class="vueUI-swiper-tab__content">
                {this.$slots.default}
            </div>
        )
        return (
            <div class="vueUI-swiper-tab">
                {header}
                {panels}
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
    private setCurrentName(val: String,pane?:Object):void{
        this.currentName = val;
        if(pane&&!(pane as any).loaded){
            (pane as any).loaded = true;
        }
        this.$emit('input',val);
    };

    // get the pane instance
    private calcPaneInstances(isForceUpdate:Boolean = false):void{
        console.log(this.$slots)
        if(this.$slots.default){
            const paneSlots = this.$slots.default.filter(vnode=>
                            vnode.tag && 
                            vnode.componentOptions &&
                            (vnode.componentOptions.Ctor as any).name === 'TabPane' );
            console.log('paneSlots',paneSlots);               
            const panes = paneSlots.map(({componentInstance})=>componentInstance);
            const panesChanged = !(panes.length === this.panes.length && panes.every((pane,index)=>pane === this.panes[index]));
            if(isForceUpdate || panesChanged){
                this.panes = panes;
                if(!this.currentName){
                    this.setCurrentName((panes[0] as any).label, panes[0]);
                }
            }

        }else if(this.panes.length !== 0){
            this.panes = [];
        }
    };

    // tab click callback
    private handleTabClick = (data):void=>{
        console.log('handleTabClick',data);
        this.setCurrentName(data.value,data.panes[data.index]);
    }


}

</script>>