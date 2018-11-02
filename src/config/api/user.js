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

export default {
    // 登录接口
    login(params) {
        return {method: 'post', url: '/gongfu/v2/authenticate', params: params}
    },
    // 同意协议
    agreeAgreement(params) {
        return {method: 'post', url: '/api/user/agree_item_time', params: params}
    },
    // 退出登录
    logout(params) {
        return {method: 'post', url: '/gongfu/logout', params: params}
    }
}
