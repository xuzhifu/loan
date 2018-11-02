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

// localStorage 存储
export const localStorage = {
    /**
     * 设置 localStorage
     * @param key
     * @param value
     * @param isJson 是否需要转化成json格式，默认是true
     */
    setItem: (key, value, isJson = true) => {
        if (!key) return
        let resetValue = value
        // let isToJson = getIsBoolean(isJson)
        if (isJson) {
            resetValue = JSON.stringify(value)
        }
        window.localStorage.setItem(key, resetValue)
    },

    /**
     * 获取 localStorage
     * @param key
     * @param isJson isJson 是否需要json对象，默认是true
     * @returns {*}
     */
    getItem: (key, isJson = true) => {
        let resetValue = window.localStorage.getItem(key)
        // let isToJson = getIsBoolean(isJson)
        if (isJson && resetValue && resetValue !== 'undefined') {
            resetValue = JSON.parse(resetValue)
        }
        return resetValue
    },

    /**
     * 删除某个 localStorage
     * @param key
     */
    removeItem: (key) => {
        window.localStorage.removeItem(key)
    },

    /**
     * 删除所有的 localStorage
     */
    clear: (array) => {
        // console.log(window.localStorage)

        /*let localStorage = window.localStorage

        for(let item in localStorage) {
            if (localStorage.hasOwnProperty(item)) {
                console.log(item)
            }
        }*/

        window.localStorage.clear()
    }
}

// sessionStorage 存储
export const sessionStorage = {
    /**
     * 设置 sessionStorage
     * @param key
     * @param value
     * @param isJson 是否需要转化成json格式，默认是true
     */
    setItem: (key, value, isJson = true) => {
        if (!key) return
        let resetValue = value
        // let isToJson = getIsBoolean(isJson)
        if (isJson) {
            resetValue = JSON.stringify(value)
        }
        window.sessionStorage.setItem(key, resetValue)
    },

    /**
     * 获取 sessionStorage
     * @param key
     * @param isJson isJson 是否需要json对象，默认是true
     * @returns {*}
     */
    getItem: (key, isJson = true) => {
        let resetValue = window.sessionStorage.getItem(key)
        // let isToJson = getIsBoolean(isJson)
        if (isJson && resetValue && resetValue !== 'undefined') {
            resetValue = JSON.parse(resetValue)
        }
        return resetValue
    },

    /**
     * 删除某个 sessionStorage
     * @param key
     */
    removeItem: (key) => {
        window.sessionStorage.removeItem(key)
    },

    /**
     * 删除所有的 sessionStorage
     */
    clear: () => {
        window.sessionStorage.clear()
    }
}
