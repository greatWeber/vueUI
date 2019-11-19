# 快速上手
> `vueUI`是基于 vue2.x 版本的, 首先把项目升级为vue2.x版本, 同时`vueUI`是支持Typescript项目的。

## 安装
```js
npm install @hero_666/web_vueui
```

## 初始化
```js
//  import
import vueUI from '@hero_666/web_vueui';
import '@hero_666/web_vueui/dist/vueUI.css';
import Vue from 'vue';

Vue.use(vueUI,{
    errorImg: 'data:image/png;base64.......' // 错误图片占位符 base64格式
})

```