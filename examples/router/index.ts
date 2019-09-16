import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'index',
            component: ()=>import('@ex/index.vue')
        },
        {
            path:'/button',
            name:'button',
            component: ()=>import('@ex/views/button.vue')
        } 
    ]
});

export default router;