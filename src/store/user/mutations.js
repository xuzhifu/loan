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
import { localStorage, sessionStorage } from '../../config/session'

export default {
    // 登录成功
    [types.USER_SIGNIN] (state, user) {
        state.isLogin = true
        state.userInfo = user
        localStorage.setItem('loginStatus', state.isLogin)
        localStorage.setItem('userInfo', state.userInfo)
    },

    // 退出登录
    [types.USER_LOGOUT] (state, user) {
        state.isLogin = false
        let historyAccount = localStorage.getItem('saveAccount') || []
        state.userInfo = {}
        localStorage.clear()
        localStorage.setItem('saveAccount', historyAccount)
    },

    // 记录登录账号
    [types.SAVE_ACCOUNT] (state, account) {
        let historyAccount = localStorage.getItem('saveAccount') || []
        // 查找是否有相同的账号跟公司名
        let item = _.filter(historyAccount, (item) => {
            return item.login == account.login
        })

        if ( !item.length ) {
            delete account.password
            historyAccount.push(account)
            localStorage.setItem('saveAccount', historyAccount)
        }
    },

    [types.REMOVE_ACCOUNT] (state, data) {
        let historyAccount = localStorage.getItem('saveAccount') || []
        historyAccount.splice(data,1);
        localStorage.setItem('saveAccount', historyAccount)
    }
}
