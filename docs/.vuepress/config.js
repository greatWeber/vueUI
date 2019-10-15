module.exports = {
    title: 'vueUI',
    description: 'vueUI 说明文档',
    themeConfig:{
        nav: [
            {text:'主页',link:'/'}
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
                ]
            }
        ]
    }
  }