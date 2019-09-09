import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Router from 'vue-router';

console.log(router);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');