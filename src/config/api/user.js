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
    // 获取首页数据轮番图
    bannerList(params) {
        return {method: 'get', url: '/index/index', params: params}
    },
    // 获取贷款产品列表
    loanProduct(params) {
        return {method: 'get', url: '/product/lists', params: params}
    },
    // 获取贷款产品详情
    loanProductDetail(params) {
        return {method: 'get', url: '/product/detail', params: params}
    },
    // 获取“一定借到钱”贷款产品
    borrowMoney(params) {
        return {method: 'get', url: '/product/must', params: params}
    },
    // 获取"全部贷款"的筛选条件
    productFilter(params) {
        return {method: 'get', url: '/product/filter', params: params}
    },



    // 获取短信验证码
    SMSCode(params) {
        return {method: 'get', url: '/sms/send', params: params}
    },
    // 获取图形验证码
    imageCode(params) {
        return {method: 'get', url: '/captcha/index', params: params}
    },
    // 用户通过手机登录
    login(params) {
        return {method: 'get', url: '/user/mobilelogin', params: params}
    },
}
