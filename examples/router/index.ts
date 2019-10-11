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
            meta:{title:'首页'},
            component: ()=>import('@ex/index.vue')
        },
        {
            path:'/button',
            name:'button',
            meta:{title:'按钮'},
            component: ()=>import('@ex/views/button.vue')
        },
        {
            path:'/picker',
            name:'picker',
            meta:{title:'选择器'},
            component: ()=>import('@ex/views/picker.vue')
        },
        {
            path:'/actionSheet',
            name:'actionSheet',
            meta:{title:'动作面板'},
            component: ()=>import('@ex/views/actionSheet.vue')
        },
        {
            path:'/badge',
            name:'badge',
            meta:{title:'徽标'},
            component: ()=>import('@ex/views/badge.vue')
        },
        {
            path:'/cell',
            name:'cell',
            meta:{title:'列表项'},
            component: ()=>import('@ex/views/cell.vue')
        },
        {
            path:'/loading',
            name:'loading',
            meta:{title:'加载'},
            component: ()=>import('@ex/views/loading.vue')
        }
    ]
});

export default router;