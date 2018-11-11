// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 路由管理
import store from './store/index' // 状态管理

import Mint from 'mint-ui';
import fetch from './config/fetch' // 加载公共组件
import * as components from './components/' // 加载公共组件
import mixins from './config/mixins/common' // 全局方法变量等
// 公共插件
import './config/flex'
import './config/filters' // 注册全局自定义过滤器
import VueKeepScrollPosition from 'vue-keep-scroll-position' // 路由界面缓存
import FastClick from 'fastclick'
import underscore from 'underscore' // 函数式编程
// 公共样式
import './assets/styles/common.less'
import './assets/styles/iconfont/iconfont.css'
import 'mint-ui/lib/style.css'

global.fetch = fetch.api
global._ = underscore
Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(VueKeepScrollPosition)
// 注册全局方法变量等
Vue.mixin(mixins)

FastClick.attach(document.body); // 消除以移动端300ms延时

// 引入全局组件
Object.keys(components).forEach((key) => {
    let name = key.replace(/(\w)/, (v) => v.toUpperCase()); // 首字母大写
    Vue.component(`mr${name}`, components[key])
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
