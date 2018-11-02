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
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './user/index'

export default new Vuex.Store({
    modules: {
        userStore: user
    },
    state: {
        rtState: 'Root'
    },
    strict: process.env.NODE_ENV !== 'production'
});
