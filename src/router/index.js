import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/user/index' // 状态用户的管理
import {routerMode} from '../config/env' // 配置编译环境和线上环境之间的切换
import underscore from 'underscore' // 函数式编程

import main from './main' // 用户
import account from './account' // 用户

Vue.use(Router)

const _ = underscore
// auth true登录才能访问，false不需要登录，默认true
const entrance = [
    {
        path: '/',
        redirect:'/index',
    }
]

const routes = _.union(entrance, main, account)
const router = new Router({
    routes: routes,
    mode: routerMode,
    firstLoad: true,
    strict: process.env.NODE_ENV !== 'production',
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    suppressTransitionError: true,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop
            }
            return {x: 0, y: to.meta.savedPosition || 0}
        }
    }
})
/*router.beforeEach(({meta, path}, from, next) => {
    // true用户已登录， false用户未登录

})*/

// 路由回退上一个历史路由
Router.prototype.goBack = (() => {
    window.history.go(-1)
})

export default router
