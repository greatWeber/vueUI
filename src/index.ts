
import Vue from 'vue';
import '@/assets/less/index.less';
import '@/assets/font/iconfont.less';
import {remDesign} from '@/libs/rem';
import utils from '@/libs/utils';

import button from './components/button/index.vue';
import picker from './components/picker/index.vue';
import actionsheet from './components/actionSheet/index.vue';
import badge from './components/badge/index.vue';
import cell from './components/cell/index.vue';
import loading from './components/loading/loading.vue';
import tab from './components/tab/index.vue';
import swiper from './components/swiper/index.vue';
import loadmore from './components/loadmore/index.vue';
import popup from './components/popup/index.vue';
import form from './components/form/form.vue';
import formItem from './components/form/formItem.vue';
import input from './components/input/index.vue';
import radio from './components/radio/index.vue';
import radioGroup from './components/radio/radioGroup.vue';
import checkbox from './components/checkbox/index.vue';
import checkboxGroup from './components/checkbox/checkboxGroup.vue';
import uploader from './components/uploader/index.vue';
import Switch from './components/switch/index.vue';
import stepper from './components/stepper/index.vue';
import search from './components/search/index.vue';
import tabbar from './components/tabbar/index.vue';
import steps from './components/steps/index.vue';
import cellG from './components/cellG/index.vue';

import swiperTabs from './components/swiperTabs/index.vue';

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
    actionsheet,
    badge,
    cell,
    loading,
    tab,
    swiper,
    loadmore,
    popup,
    form,
    formItem,
    input,
    radio,
    radioGroup,
    checkbox,
    checkboxGroup,
    uploader,
    Switch,
    stepper,
    search,
    tabbar,
    steps,
    cellG,

    swiperTabs,
};

const version = '1.0.3';
const install = (Vue,config={})=>{
    Vue.prototype.vueUIConfig = config;
    
    if ((install as any).installed)return;
    for(let k in components){
        let name = k.slice(0,1).toLowerCase()+k.slice(1).replace(/\B([A-Z])/g, '-$1').toLowerCase();
        console.log(name);
        Vue.component('vu-'+name,components[k]);
    }
};

Vue.prototype.$loading = Loading;
Vue.prototype.$toast = Toast;
Vue.prototype.$modal = Modal;
Vue.prototype.$preview = Preview.instance;

Preview.preview();
console.log('vue',Vue);

const vueUI = {
    install,
    version,
}

export default vueUI;

export {
    install,
    version,
}