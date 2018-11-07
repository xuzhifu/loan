<style lang="less">
    @import "../../assets/styles/main.less";
</style>

<template>
    <div class="account-box">
        <div class="user-box" flex="main:center cross:center">
            <img src="../../assets/img/user.jpg" />
            <span>13888888888</span>
        </div>
        <div class="link-box">
            <div class="link-list">
                <router-link to="/"><i class="icon-money fc-gold"></i>签到领现金<i class="icon-right"></i></router-link>
                <router-link to="/"><i class="icon-message fc-green"></i>消息中心<i class="icon-right"></i></router-link>
                <router-link to="/"><i class="icon-blacklist fc-blue"></i>黑名单查询<i class="icon-right"></i></router-link>
                <router-link to="/"><i class="icon-help fc-red"></i>帮助中心<i class="icon-right"></i></router-link>
                <router-link to="/"><i class="icon-suggest fc-orange"></i>投诉建议<i class="icon-right"></i></router-link>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    /**
     *
     * @module
     * @desc
     * @param
     */
    export default {
        data() {
            return {

            };
        },
        mounted () {
            let self = this;
        },
        methods:{

        },
    };
</script>
