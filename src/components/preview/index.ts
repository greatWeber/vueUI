import Vue from 'vue';
import preview from './preview.vue';

let newInstance;
const PreviewInstance = Vue.extend(preview); // 创建构造函数

// 执行方法后完成挂载
const initInstance = ()=>{
    newInstance = new PreviewInstance(); // 实例化
    // 实例化后手动挂载，得到$el真实Dom，将其添加到body最后
    document.body.appendChild(newInstance.$mount().$el);
};

if (!newInstance){
    initInstance();
}

// 自定义指令
/**
 * v-preview: 图片预览指令，通过传入的地址，点击图片的时候预览，并且带有占位图片
 */
const preViewHandler = ()=>{
    const defaultImg = '';
    Vue.directive('preview',{
        bind: bindHandler
    })
}

const bindHandler=(el, binding, vnode)=>{
    let error;
    if(!binding.value){
        // 当图片地址为空的时候
        error = true;
        el.classList.add('vueUI-not-src');
        el.src = Vue.prototype.vueUIConfig.errorImg;
        return;
    }

    el.src = binding.value;
    el.onerror = ()=>{
        el.src = Vue.prototype.vueUIConfig.errorImg;
        el.classList.add('vueUI-img-error');
        error = true;
    }

    el.addEventListener('click',()=>{
        if(error) return;
        Vue.prototype.$preview.show(binding.value);
    })
}

export default {
    instance: newInstance,
    preview: preViewHandler
};