import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Router from 'vue-router';
import vueUI from '@/index';
// const vueUI = require('../dist/vueUI.js');
// import '../dist/vueUI.css';
console.log(vueUI);
Vue.use(vueUI)
Vue.config.productionTip = false;

const app = new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');

console.log(app);