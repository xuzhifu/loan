<style lang="less">
    @import "../../assets/styles/main.less";
</style>

<template>
    <div class="loan-box">
        <div class="ui-filter-box">
            <div class="ui-item" flex="">
                <div class="cell-title" flex="flex-box-0">类型：</div>
                <div class="ui-option-list" flex="dir-left flex-box-1">
                    <span :class="{ active: item.active }" @click="getCategoryHandle(item)" v-for="(item, index) in category" :key="index" >{{ item.name }}</span>
                </div>
            </div>

            <div class="ui-item" flex="">
                <div class="cell-title" flex="flex-box-0">身份：</div>
                <div class="ui-option-list" flex="dir-left flex-box-1">
                    <span :class="{ active: item.active }" @click="getReclistHandle(item)" v-for="(item, index) in reclist" :key="index" >{{ item.name }}</span>
                </div>
            </div>
        </div>


        <div class="loan-list">
            <div class="loan-item" flex="dir:left box:first" v-for="(item, index) in loanProduct" :key="index">
                <div class="loan-left">
                    <div class="loan-top" flex="">
                        <div class="img" flex-box="0"><img :src="item.image"/></div>
                        <div class="loan-title" flex-box="1">
                            <h2>{{item.name}}</h2>
                            <span>急速审核，轻松借款</span>
                        </div>
                    </div>
                    <div class="loan-bottom" flex="box:mean">
                        <div>
                            <p class="fc-gold">{{item.quota_min}}-{{item.quota_max}}</p>
                            <p class="fc-gray">可借额度(元)</p>
                        </div>
                        <div>
                            <p>{{item.rate}}%</p>
                            <p class="fc-gray">日利率(%)</p>
                        </div>
                        <div>
                            <p>{{item.accounting}}</p>
                            <p class="fc-gray">最长可借时间</p>
                        </div>
                    </div>
                </div>
                <div class="loan-right" flex="main:center cross:center">
                    <div>
                        <p><span class="fc-gold">{{item.allow_apply}}</span>万人已申请</p>
                        <mt-button type="primary" @click="getApplayHandle(item)">申请</mt-button>
                    </div>
                </div>
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
        data(){
            return {
                cat_id : null,
                category:null,
                identity:null,
                reclist:null,
                loanProduct:null,
            };
        },
        mounted() {
            let self = this
            self.init()
        },
        methods: {
            /**
             * 初始化数据
             */
            init(){
                let self = this
                self.__productFilter()
                self.__productData()
            },
            /**
             * 获取产品筛选条件
             * @param index
             */
            __productFilter(){
                let self = this
                let postData = {}
                fetch('productFilter', {}).then(response => {
                    self.category = response.data.category
                    self.reclist = response.data.reclist
                }).catch((error) => {

                })
            },
            /**
             * 获取产品列表
             * @param index
             */
            __productData() {
                let self = this
                let postData = {
                    cat_id: self.cat_id,
                    identity: self.identity,
                }
                fetch('loanProduct', postData).then(response => {
                    self.loanProduct = response.data
                }).catch((error) => {

                })
            },

            /**
             * 类型过滤
             * @param index
             */
            getCategoryHandle(item) {
                let self = this;
                item.active = !item.active
                self.cat_id = item.id

                self.__productData()
            },
            /**
             * 身份过滤
             * @param index
             */
            getReclistHandle(item){
                let self = this;
                item.active = !item.active
                self.identity = item.name

                self.__productData()
            },
            /**
             * 前往详情页
             * @param item
             */
            getApplayHandle(item){
                let self = this
                let query = {
                    id: item.id
                }
                self.$router.push({path: '/apply', query: query})
            }
        },
    };
</script>
