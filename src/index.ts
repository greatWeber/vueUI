import Test from './components/test/index.vue';
import Vue from 'vue';
import '@/assets/less/index.less';

const components = [
    Test
];


const version = '1.0.0';
const install = (Vue,config={})=>{
    if((install as any).installed) return;
    components.map((component)=>{
        console.log(component.name)
        Vue.component('vue-'+component.name,component);
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