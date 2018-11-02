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
import axios from 'axios'
import {baseAccessUrl, baseUrl} from './env'
import api from './service'
import {localStorage} from "./session"

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 添加加载框
const addLoadingBox = (config) => {

}
// 移除加载框
const removeLoadingBox = () => {

}
// 请求拦截器
axios.interceptors.request.use((config) => {
    addLoadingBox(config)

    if (config.method === 'post') {
        config.data = JSON.stringify(config.data)
    }
    return config
}, (error) => {
    // console.log('错误的传参', 'fail')
    removeLoadingBox()
    return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((response) => {
    // 请求成功,根据接口固定返回的一个字段判断
    removeLoadingBox()
    return response
}, (error) => {
    // console.log('网络异常')
    removeLoadingBox()
    return Promise.reject(error)
})

/**
 * 请求封装
 * @param actionObj {method: 请求类型, url: 请求地址, params: 请求参数}
 * @param errorText {String || Array || Boolean}
 * @returns {Promise}
 */
export function fetch(actionObj, error) {
    // 错误代码提示
    let flag = _.isBoolean(error)
    let errorText = !flag && _.extend({
        0: '网络错误',
        1001: '传递的参数有错，请检查',
        1002: '数据错误',
        1003: '版本号未能匹配或未找到发布的版本号'
    }, error)
    let VueAxios = setMethods(actionObj)

    let promise = new Promise((resolve, reject) => {
        VueAxios.then(response => {
            // console.log('请求成功')
            resolve(response)
        }).catch((error) => {
            // console.log('请求失败', reject(error))
            reject(error)
        })
    })

    return promise
}

/**
 * 过滤出请求的类型
 * @param actionObj {method: 请求类型, url: 请求地址, params: 请求参数}
 */
export function setMethods(actionObj) {
    let methods = actionObj.method.toLowerCase()
    let VueAxios = null
    switch (methods) {
        case 'post':
            VueAxios = axios.post(actionObj.url, actionObj.params)
            break
        case 'get':
            VueAxios = axios.get(actionObj.url, actionObj.params)
            break
        case 'request':
            VueAxios = axios.request(actionObj.url, actionObj.params)
            break
        case 'delete':
            VueAxios = axios.delete(actionObj.url, actionObj.params)
            break
        case 'options':
            VueAxios = axios.options(actionObj.url, actionObj.params)
            break
        case 'put':
            VueAxios = axios.put(actionObj.url, actionObj.params)
            break
        case 'patch':
            VueAxios = axios.patch(actionObj.url, actionObj.params)
            break
        default :
            VueAxios = axios.post(actionObj.url, actionObj.params)
            break
    }
    return VueAxios
}

export default {
    api(name, params, errorText) {
        return fetch(api[name](params), errorText)
    }
}
