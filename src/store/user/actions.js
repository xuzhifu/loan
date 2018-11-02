/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 * 2018/7/27      1.0     First version
 *
 */
import * as types from './types'

export default {
    // 登录成功
    [types.USER_SIGNIN_ACTION]({commit, rootState}, parmas) {
        commit(types.USER_SIGNIN, parmas)
    },

    // 退出登录
    [types.USER_LOGOUT_ACTION]({commit, rootState}, parmas) {
        commit(types.USER_LOGOUT, parmas)
    },

    // 记录登录账号
    [types.SAVE_ACCOUNT_ACTION]({commit, rootState}, parmas) {
        commit(types.SAVE_ACCOUNT, parmas)
    },

    // 删除登录账号
    [types.REMOVE_ACCOUNT]({commit, rootState}, parmas) {
        commit(types.REMOVE_ACCOUNT, parmas)
    }
}
