module.exports = {
    title: 'vueUI',
    description: 'vueUI 说明文档',
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
                    '/base/swiper',
                    '/base/loadmore',
                    '/base/popup',
                ]
            }
        ]
    }
  }