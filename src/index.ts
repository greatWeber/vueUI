
import Vue from 'vue';
import '@/assets/less/index.less';
import {remDesign} from '@/libs/rem';
import utils from '@/libs/utils';

import button from './components/button/index.vue';
import picker from './components/picker/index.vue';
import actionSheet from './components/actionSheet/index.vue';
import badge from './components/badge/index.vue';
import cell from './components/cell/index.vue';
import loading from './components/loading/loading.vue';
import tab from './components/tab/index.vue';
import swiper from './components/swiper/index.vue';
import loadmore from './components/loadmore/index.vue';
import popup from './components/popup/index.vue';

import Loading from './components/loading/index';
import Toast from './components/toast/index';
import Modal from './components/modal/index';
import Preview from './components/preview/index';

remDesign();

utils.ripple();

console.log('install start');

const components ={
    button,
    picker,
    actionSheet,
    badge,
    cell,
    loading,
    tab,
    swiper,
    loadmore,
    popup,
};

const version = '1.0.0';
const install = (Vue,config={})=>{
    Vue.prototype.vueUIConfig = config;
    if ((install as any).installed)return;
    for(let k in components){
        Vue.component('vueUI-'+k.toLowerCase(),components[k]);
    }
};

// 全局方法调用
Vue.prototype.$loading = Loading;
Vue.prototype.$toast = Toast;
Vue.prototype.$modal = Modal;
Vue.prototype.$preview = Preview.instance;

Preview.preview();

const vueUI = {
    install,
    version,
}

export default vueUI;

export {
    install,
    version,
}