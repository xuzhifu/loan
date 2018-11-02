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
 * 仅绑定可执行一次事件
 * @param el 绑定事件的对象
 * @param event
 * @param fn
 */
export const once = (el, event, fn) => {
    let listener = function () {
        if (fn) {
            fn.apply(this, arguments)
        }
        off(el, event, listener)
    }
    on(el, event, listener)
}

/**
 * 移除监听事件
 */
export const off = (() => {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * 绑定监听事件
 * @type {function(*=, *=)}
 */
export const on = (() => {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * 是否有某个class名
 * @type {function(*=, *=)}
 */
export const hasClass = ((el, cls) => {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
})

/**
 * 追加class
 * @type {function(*=, *=)}
 */
export const addClass = ((el, cls) => {
    if (!el) return
    let curClass = el.className
    let classes = (cls || '').split(' ')

    for (let i = 0, j = classes.length; i < j; i++) {
        let clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.add(clsName)
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName
            }
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
})

/**
 * 移除class
 * @type {function(*=, *=)}
 */
export const removeClass = ((el, cls) => {
    if (!el || !cls) return
    let classes = cls.split(' ')
    let curClass = ' ' + el.className + ' '

    for (let i = 0, j = classes.length; i < j; i++) {
        let clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.remove(clsName)
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ')
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass)
    }
})

/**
 * 函数节流方法
 * @param fn 延迟执行的方法
 * @param delay 延迟的时间
 * @param mustRunDelay 间隔时间
 * @returns {Function} 返回执行的回调函数
 */
export const throttle = ((fn, delay, mustRunDelay = 0) => {
    let timer = null
    let tStart
    return function () {
        const context = this
        const args = arguments
        const tCurr = +new Date()
        clearTimeout(timer)
        if (!tStart) {
            tStart = tCurr
        }
        if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
            fn.apply(context, args)
            tStart = tCurr
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }
})

/**
 * 清除左右空格
 * @type {function(*=)}
 */
export const trim = ((string) => {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
})

/**
 * 时间戳转日期格式
 * @param t 日期
 * @param format 转化后的格式
 */
export const formatDate = ((t, format='yyyy-MM-dd') => {
    let now = new Date(t)
    let hours = now.getHours()
    let dates = {
        "M+": now.getMonth() + 1, // 月份
        "d+": now.getDate(), // 日
        "h+": hours % 12 == 0 ? 12 : hours % 12, // 小时
        "H+": hours, // 小时
        "m+": now.getMinutes(), // 分
        "s+": now.getSeconds(), // 秒
        "q+": Math.floor((now.getMonth() + 3) / 3), // 季度
        "S": now.getMilliseconds() // 毫秒
    };

    let week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (now.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[now.getDay() + ""]);
    }
    for (var key in dates) {
        if (new RegExp("(" + key + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (dates[key]) : (("00" + dates[key]).substr(("" + dates[key]).length)));
        }
    }
    return format;
})

/**
 * 时间转周几
 * @type {function(*=)}
 */
export const formatWeek = ((t) => {
    let now = new Date(t)
    let day = now.getDay()//获取存储当前日期
    let weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

    return weekdays[day]
})

/**
 * 数字千分位格式化
 * @param numString [String || Number] - 数字
 */
export const toThousands = ((numString) => {
    return (numString || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
})

/**
 * 数字分割处理
 * @param x [String || Number] - 数字
 * @param f [Number] - 需要保留的是小数位位数 ----【2】
 */
export const get_exact = ((x, f) => {
    var xs = String(x)
    var xi = xs.indexOf('.')
    var p = Math.pow(10, f)
    var slice = Array.prototype.slice
    var xr = slice.call(xs)

    // 小数点后移 p 的 0 的个数
    if (xi !== -1) {
        p = String(p)
        var arr = xs.split('.')
        var ir = slice.call(arr[0]) // 整数位
        var dr = slice.call(arr[1]) // 小数位
        var ip = p.indexOf(0)
        var zn = f > 0 ? (p.length - ip) : 0 // 小数点移动的位

        // 小数位不够的，补0
        for (var l = dr.length; l < zn; l++) {
            dr.push('0')
        }

        // 小数位后移
        var sdr = dr.splice(zn)
        if (sdr.length) {
            dr.push('.')
        }

        xr = ir.concat(dr.concat(sdr))
    } else {
        return x * p
    }

    var n = parseFloat(xr.join(''))
    var s = String(n)
    var i = s.indexOf('.')

    // 如果有小数位
    // 取小数位第一位决定整数位是否加1
    if (i !== -1) {
        // 整数位
        n = parseInt(s.substr(0, i))

        var d = parseInt(s.substr(i + 1, 1))

        if (d >= 5) {
            n = n + 1
        }
    }
    return n
})

/**
 * 保留小数位
 * @param numString [String || Number] - 数字 ----【0】
 * @param fraction_digits [Number] - 需要保留的是小数位位数 ----【2】
 * @param isToThousands [Boolean] - 是否需要千分位格式化 ----【true】
 */
export const toFixed = ((numString = 0, fraction_digits = 2, isToThousands = true) => {
    var x = numString
    var f = parseInt(fraction_digits)
    if (f < 0 || f > 20) {
        throw Error('Range Error')
    }
    if (x !== x) return 'NaN'

    var s = ''
    if (x < 0) {
        s = '-'
        x = -x
    }
    if (x >= Math.pow(10, 21)) {
        var m = String(x)
    } else {
        // var n be an integer for which the exact mathematical value of n ÷ 10f – x
        // is as close to zero as possible. If there are two such n, pick the larger n.
        // 0 = n / 10f - x
        // n / 10f = x
        // n = x * 10f
        var n = get_exact(x, f)

        // If n = 0, let m be the String "0". Otherwise,
        // let m be the String consisting of the digits of the decimal
        // representation of n (in order, with no leading zeroes).
        if (n === 0) {
            m = '0'
        } else {
            // m = String(n / Math.pow(10, f))
            m = n.toString()
        }

        // If f ≠ 0, then
        // Let k be the number of elements in m.
        // If k ≤ f, then
        // Let z be the String consisting of f+1–k occurrences of the code unit 0x0030.
        // Let m be the concatenation of Strings z and m.
        // Let k = f + 1.
        // Let a be the first k–f elements of m, and let b be the remaining f elements of m.
        // Let m be the concatenation of the three Strings a, ".", and b.
        if (f !== 0) {
            var k = m.length
            if (k <= f) {
                var z = new Array(f + 1 - k) // 0x0030 unicode 对应的字符就是数字0
                for (var i = 0; i < z.length; i++) {
                    z[i] = 0
                }
                z = z.join('')
                m = z + m
                k = f + 1
            }

            var a = m.substring(0, k - f),
                b = m.substr(k - f)
            if (isToThousands) {
                a = toThousands(a)
            }
            m = a + '.' + b
        }

        return s + m
    }
})

/**
 * 将千分位数字转为数字格式
 * @type {function(*)}
 */
export const toNumber = ((numString = 0) => {
    return Number(numString.toString().replace(',', ''))
})

/**
 * 深度拷贝
 * @param obj 被拷贝的对象，支持任何类型
 * @type {function(*=)}
 */
export const copy = ((obj) => {
    let results
    switch (typeof obj) {
        case 'undefined':
            break
        case 'string'   :
            results = obj + ''
            break
        case 'number'   :
            results = obj - 0
            break
        case 'boolean'  :
            results = obj
            break
        case 'object'   :
            if (_.isNull(obj)) {
                results = null
            } else {
                if (_.isArray(obj)) {
                    results = []
                    _.each(obj, (item) => {
                        results.push(copy(item))
                    })
                } else {
                    results = {}
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            results[key] = copy(obj[key])
                        }
                    }
                }
            }
            break
        default:
            results = _.clone(obj)
            break
    }
    return results
})
