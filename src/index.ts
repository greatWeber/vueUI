
import Vue from 'vue';
import '@/assets/less/index.less';
import {remDesign} from '@/libs/rem';

import button from './components/button/index.vue';
import picker from './components/picker/index.vue';
import actionSheet from './components/actionSheet/index.vue';

remDesign();

const components = [
    button,
    picker,
    actionSheet,
];


const version = '1.0.0';
const install = (Vue,config={})=>{
    if((install as any).installed) return;
    components.map((component)=>{
        console.log(component.name);
        let name = component.name.charAt(0).toLowerCase()+component.name.slice(1).toLowerCase();
        console.log(name,component.name);
        Vue.component('vueUI-'+name,component);
    })
};

const vueUI = {
    install,
    version,
}

export default vueUI;

export {
    install,
    version,
}