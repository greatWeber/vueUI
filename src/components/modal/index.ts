
import Vue from 'vue';
import modal from './modal.vue';

let newInstance;
const modalInstance = Vue.extend(modal);

const initInstance = ()=>{
    newInstance = new modalInstance();
    document.body.appendChild(newInstance.$mount().$el);
};

if (!newInstance){
    initInstance();
}

export default newInstance ;