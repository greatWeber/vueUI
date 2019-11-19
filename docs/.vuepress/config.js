module.exports = {
    title: 'vueUI',
    description: 'vueUI 说明文档',
    base:'/',
    themeConfig:{
        nav: [
            {text:'主页',link:'/'},
            {text:'Github',link:'https://github.com/greatWeber/vueUI'}
        ],
        sidebar:[
            {
                title:'介绍',
                collapsable:false,
                children:[
                    '/',
                    '/introduction/quickstart'
                ]
            },
            {
                title:'基本组件',
                collapsable:false,
                children:[
                    '/base/button',
                    '/base/badge',
                    '/base/cell',
                    '/base/tab',
                    '/base/actionSheet',
                    '/base/popup',
                    '/base/search',
                    '/base/tabbar',
                ]
            },
            {
                title:'表单组件',
                collapsable:false,
                children:[
                    '/form/picker',
                    '/form/input',
                    '/form/radio',
                    '/form/checkbox',
                    '/form/uploader',
                    '/form/switch',
                    '/form/stepper',
                    '/form/form',
                ]
            },
            {
                title:'js调用',
                collapsable:false,
                children:[
                    '/js/loading',
                    '/js/toast',
                    '/js/model'
                ]
            },
            {
                title:'高级组件',
                collapsable:false,
                children:[
                    '/high/swiper',
                    '/high/loadmore',
                    '/high/preview',
                    '/high/steps',
                ]
            }
        ]
    }
  }