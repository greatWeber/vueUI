
import Vue from 'vue';
import toast from './toast.vue';

let newInstance;
const toastInstance = Vue.extend(toast);

const initInstance = ()=>{
    newInstance = new toastInstance();
    document.body.appendChild(newInstance.$mount().$el);
};

if (!newInstance){
    initInstance();
}

export default newInstance ;