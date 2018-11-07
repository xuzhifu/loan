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
    swiperList(params) {
        return {method: 'post', url: '/api/v1/index/index', params: params}
    },
    // 获取贷款产品列表
    loanProduct(params) {
        return {method: 'post', url: '/product/lists', params: params}
    },
    // 获取贷款产品详情
    loanProductDetail(params) {
        return {method: 'post', url: '/product/detail', params: params}
    },
    // 获取“一定借到钱”贷款产品
    borrowMoney(params) {
        return {method: 'post', url: '/product/must', params: params}
    },
    // 获取"全部贷款"的筛选条件
    productFilter(params) {
        return {method: 'post', url: '/product/filter', params: params}
    },



    // 获取短信验证码
    SMSCode(params) {
        return {method: 'post', url: '/sms/send', params: params}
    },
    // 获取图形验证码
    imageCode(params) {
        return {method: 'post', url: '/captcha/index', params: params}
    },
    // 用户通过手机登录
    login(params) {
        return {method: 'post', url: '/user/mobilelogin', params: params}
    },
}
