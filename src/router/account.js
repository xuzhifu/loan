/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 *        1.0     First version
 *
 */
/*---------------------------------------------我的----------------------------------------------*/
const account = r => require.ensure([], () => r(require('../pages/account/account')), 'account') // 我的

export default [
    {
        path: '/account', // 我的
        name: '我的',
        meta: {auth: false},
        component: account
    }
]
