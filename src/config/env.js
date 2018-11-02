/**
 * @file
 * @author: lzb
 * @params: 参数说明
 * @history:
 * Date      Version Remarks
 * ========= ======= ==================================
 * 2018/7/27       1.0     First version
 *
 */

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseAccessUrl = null
let baseUrl = null
let routerMode = null
let imgBaseUrl = null

if (process.env.NODE_ENV === 'development') {
    baseAccessUrl = 'http://gethost.runwise.cn/' // 验证身份
    baseUrl = 'http://gethost.runwise.cn/'
    routerMode = 'hash' // history
}
else if (process.env.NODE_ENV === 'production') {
    baseAccessUrl = 'http://gethost.runwise.cn/'
    baseUrl = 'http://gethost.runwise.cn/'
}

export {
    baseAccessUrl,
    baseUrl,
    routerMode,
    imgBaseUrl
}
