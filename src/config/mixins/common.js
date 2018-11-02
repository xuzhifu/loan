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
import { mapState } from 'vuex'

export default {
    computed: mapState({
        userInfo: state => state.userStore.userInfo
    }),

    methods: {

    }
}
