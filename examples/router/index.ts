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
        },
        {
            path:'/picker',
            name:'picker',
            component: ()=>import('@ex/views/picker.vue')
        },
        {
            path:'/actionSheet',
            name:'actionSheet',
            component: ()=>import('@ex/views/actionSheet.vue')
        },
        {
            path:'/badge',
            name:'badge',
            component: ()=>import('@ex/views/badge.vue')
        },
        {
            path:'/cell',
            name:'cell',
            component: ()=>import('@ex/views/cell.vue')
        }
    ]
});

export default router;