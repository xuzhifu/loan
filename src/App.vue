<style lang="less">
    @import "./assets/styles/component.less";
    @import "./assets/styles/main.less";
</style>

<template>
    <div class="container">

        <div class="header-box" v-if="$route.path!='/index'">
            <mr-header-bar></mr-header-bar>
        </div>


        <router-view v-keep-scroll-position></router-view>


        <div class="menu-box">
            <mt-tabbar v-model="selected">
                <mt-tab-item id="tab1">
                    <router-link to="/index">
                        <i class="icon-home"></i><p>推荐</p>
                    </router-link>
                </mt-tab-item>
                <mt-tab-item id="tab2">
                    <router-link to="/loan">
                        <i class="icon-loan"></i><p>全部贷款</p>
                    </router-link>
                </mt-tab-item>
                <mt-tab-item id="tab3">
                    <router-link to="/apply">
                        <i class="icon-wallet"></i><p>一定借到钱</p>
                    </router-link>
                </mt-tab-item>
                <mt-tab-item id="tab4">
                    <router-link to="/account">
                        <i class="icon-account"></i><p>我的</p>
                    </router-link>
                </mt-tab-item>
            </mt-tabbar>
            <div style="height:58px"></div>
        </div>

    </div>


</template>

<script>
    export default {
        data () {
            return {
                selected: 'tab1',
            }
        },
        watch: {
            selected: function (val, oldVal) {
                /*let self = this
                // 这里就可以通过 val 的值变更来确定
                console.log(val);
                console.log(oldVal);*/
            }
        },
        mounted () {
            let self = this;
        },
        methods: {

        }
    }
</script>
