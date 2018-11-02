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
import Vue from 'vue'
import {toFixed, formatDate} from './utils'

// 数字格式
Vue.filter('number', (value, digits, isToThousands) => {
    return toFixed(value, digits, isToThousands)
})

// 日期格式化
Vue.filter('date', (date, format) => {
    return formatDate(date, format)
})
