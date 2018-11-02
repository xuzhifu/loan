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
import underscore from 'underscore' // 函数式编程
import user from './api/user'

const _ = underscore
const apiList = _.extend(user)

export default apiList
