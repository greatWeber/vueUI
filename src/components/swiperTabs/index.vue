<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
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

}

</script>>