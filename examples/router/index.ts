import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
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
            meta:{title:'按钮',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/button.vue')
        },
        {
            path:'/picker',
            name:'picker',
            meta:{title:'选择器',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/picker.vue')
        },
        {
            path:'/actionSheet',
            name:'actionSheet',
            meta:{title:'动作面板',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/actionSheet.vue')
        },
        {
            path:'/badge',
            name:'badge',
            meta:{title:'徽标',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/badge.vue')
        },
        {
            path:'/cell',
            name:'cell',
            meta:{title:'列表项',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/cell.vue')
        },
        {
            path:'/loading',
            name:'loading',
            meta:{title:'加载',groupZh:'js调用',groupEn:'js'},
            component: ()=>import('@ex/views/loading.vue')
        },
        {
            path:'/tab',
            name:'tab',
            meta:{title:'导航条',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/tab.vue')
        },
        {
            path:'/toast',
            name:'toast',
            meta:{title:'提示',groupZh:'js调用',groupEn:'js'},
            component: ()=>import('@ex/views/toast.vue')
        },
        {
            path:'/modal',
            name:'modal',
            meta:{title:'弹窗',groupZh:'js调用',groupEn:'js'},
            component: ()=>import('@ex/views/modal.vue')
        },
        {
            path:'/swiper',
            name:'swiper',
            meta:{title:'轮播图',groupZh:'高阶',groupEn:'high'},
            component: ()=>import('@ex/views/swiper.vue')
        },
        {
            path:'/loadmore',
            name:'loadmore',
            meta:{title:'加载更多',groupZh:'高阶',groupEn:'high'},
            component: ()=>import('@ex/views/loadmore.vue')
        },
        {
            path:'/popup',
            name:'popup',
            meta:{title:'弹层',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/popup.vue')
        },
        {
            path:'/preview',
            name:'preview',
            meta:{title:'图片预览',groupZh:'高阶',groupEn:'high'},
            component: ()=>import('@ex/views/preview.vue')
        },
        {
            path:'/form',
            name:'form',
            meta:{title:'表单',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/form.vue')
        },
        {
            path:'/input',
            name:'input',
            meta:{title:'输入框',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/input.vue')
        },
        {
            path:'/radio',
            name:'radio',
            meta:{title:'单选框',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/radio.vue') 
        },
        {
            path:'/checkbox',
            name:'checkbox',
            meta:{title:'多选框',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/checkbox.vue') 
        },
        {
            path:'/uploader',
            name:'uploader',
            meta:{title:'上传',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/uploader.vue') 
        },
        {
            path:'/switch',
            name:'switch',
            meta:{title:'开关',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/switch.vue') 
        },
        {
            path:'/stepper',
            name:'stepper',
            meta:{title:'计步器',groupZh:'表单',groupEn:'form'},
            component: ()=>import('@ex/views/stepper.vue') 
        },
        {
            path:'/search',
            name:'search',
            meta:{title:'搜索框',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/search.vue') 
        },
        {
            path:'/tabbar',
            name:'tabbar',
            meta:{title:'底部导航',groupZh:'基本',groupEn:'base'},
            component: ()=>import('@ex/views/tabbar.vue') 
        },
        {
            path:'/steps',
            name:'steps',
            meta:{title:'步骤',groupZh:'高阶',groupEn:'high'},
            component: ()=>import('@ex/views/steps.vue') 
        },
        {
            path:'/swiperTabs',
            name:'swiperTabs',
            meta:{title:'滑动tabs',groupZh:'高阶',groupEn:'high'},
            component: ()=>import('@ex/views/swiperTabs.vue') 
        }
    ]
});

export default router;