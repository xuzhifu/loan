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
import mutations from './mutations'
import actions from './actions'
import {localStorage, sessionStorage} from '../../config/session'

const state = {
    isLogin: localStorage.getItem('loginStatus') || false,   // 是否登录
    userInfo: localStorage.getItem('userInfo') || {},     // 登录成功后的信息
    saveAccount: localStorage.getItem('saveAccount') || [],     // 记住密码之后的用户信息数组
}
export default {
    state,
    mutations,
    actions
}


