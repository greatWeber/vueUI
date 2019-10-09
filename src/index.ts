
import Vue from 'vue';
import '@/assets/less/index.less';
import {remDesign} from '@/libs/rem';

import button from './components/button/index.vue';
import picker from './components/picker/index.vue';
import actionSheet from './components/actionSheet/index.vue';
import badge from './components/badge/index.vue';
import cell from './components/cell/index.vue';

remDesign();

console.log('install start');

const components ={
    button,
    picker,
    actionSheet,
    badge,
    cell,
};

const version = '1.0.0';
const install = (Vue,config={})=>{
    if ((install as any).installed)return;
    for(let k in components){
        Vue.component('vueUI-'+k.toLowerCase(),components[k]);
    }
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