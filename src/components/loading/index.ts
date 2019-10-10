
import Vue from 'vue';
import loading from './loading.vue';

let newInstance;
const LoadingInstance = Vue.extend(loading); // 创建构造函数

// 执行方法后完成挂载
const initInstance = ()=>{
    newInstance = new LoadingInstance(); // 实例化
    // 实例化后手动挂载，得到$el真实Dom，将其添加到body最后
    document.body.appendChild(newInstance.$mount().$el);
};

if (!newInstance){
    initInstance();
}

export default newInstance;