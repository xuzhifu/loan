<style lang="less">
    @import "../../assets/styles/component.less";
</style>

<template>
    <div>
        <div class="header-bar">
            <div class="back-box">
                <mt-header :title="$route.name">
                    <router-link to="/" slot="left">
                        <mt-button icon="back"></mt-button>
                    </router-link>
                </mt-header>
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
        data () {
            return {

            }
        },
        mounted () {
            let self = this;
        },
        methods: {

        }
    }
</script>
