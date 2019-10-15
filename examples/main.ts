import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Router from 'vue-router';
import vueUI from '@/index';
// const vueUI = require('../dist/vueUI.js');
// import '../dist/vueUI.css';
console.log(vueUI);
Vue.use(vueUI,{
  errorImg:'data:image/png;base64,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'
})
Vue.config.productionTip = false;


const app = new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');

console.log(app);