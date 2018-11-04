/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 * 2018/4/23      1.0     First version
 *
 */
/*---------------------------------------------主页----------------------------------------------*/
const index = r => require.ensure([], () => r(require('../pages/main/index')), 'index') // 首页
const loan = r => require.ensure([], () => r(require('../pages/main/loan')), 'loan') // 全部贷款
const apply = r => require.ensure([], () => r(require('../pages/main/apply')), 'apply') // 通过王
const borrowMoney = r => require.ensure([], () => r(require('../pages/main/borrow-money')), 'apply') // 一定借到钱
const quick = r => require.ensure([], () => r(require('../pages/main/quick')), 'quick') // 快速借钱

// breadNumber面包屑的等级, permissionsType{0, 门店用户, 1: 客户用户}
export default [
    {
        path: '/index', // 首页
        name: '首页',
        meta: {auth: true, breadNumber:0, index: true, permissionsType: [0]},
        component: index
    },
    {
        path: '/loan', // 全部贷款
        name: '全部贷款',
        meta: {auth: true, breadNumber:0, index: true, permissionsType: [0]},
        component: loan
    },
    {
        path: '/apply', // 通过王
        name: '通过王',
        meta: {auth: true, breadNumber:0, index: true, permissionsType: [0]},
        component: apply
    },
    {
        path: '/borrow-money',
        name: '一定借到钱',
        meta: {auth: true, breadNumber:0, index: true, permissionsType: [0]},
        component: borrowMoney
    },
    {
        path: '/quick', // 快速借钱
        name: '快速借钱',
        meta: {auth: true, breadNumber:0, index: true, permissionsType: [0]},
        component: quick
    },
]
