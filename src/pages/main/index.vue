<style lang="less">
</style>

<template>
    <div class="index-box">
        <!--<div class="banner-box">
            <router-link to="/"><img src="../../assets/img/banner.jpg"/></router-link>
        </div>-->
        <mt-swipe class="ui-swipe-box">
            <mt-swipe-item v-for="item in swipeList" :key="item.id">
                <a :href="item.url"><img :src="item.image" /></a>
            </mt-swipe-item>
        </mt-swipe>

        <div class="ui-series-row-box" flex="box:mean">
           <ul flex="dir:left">
               <li v-for="item in seriesRowList" :key="item.id">
                   <div class="cell-thumb"><img :src="item.image" /></div>
                   <p>{{item.name}}</p>
               </li>
           </ul>
        </div>

        <div class="ui-series-column-box">
            <ul>
                <li v-for="item in seriesColumnList" :key="item.id">
                    <p>{{item.name}}</p>
                    <p></p>
                    <div class="cell-thumb"><img :src="item.image" /></div>
                </li>
            </ul>
        </div>

        <div class="ui-banner">
            <a :href="bannerList.url"><img :src="bannerList.image"/></a>
        </div>


        <div class="item-box">
            <div class="item-title">
                <p class="fc-gold"><i class="icon-great"></i>推荐贷款列表 <router-link to="/"><span>更多产品</span><i class="icon-right"></i></router-link></p>

            </div>
            <div class="item-list">
                <router-link to="/" v-for="item in reclistList" :key="item.id">
                    <div class="ui-item" flex="cross:center">
                        <div class="cell-thumb" flex-box="0" flex="main:center cross:center">
                            <img :src="item.image" />
                        </div>
                        <div class="ui-content" flex-box="1">
                            <h3>{{item.name}}</h3>
                            <div class="ui-tips">
                                <span class="cell-gold">{{item.reclist}}</span>
                                <span class="cell-blue" v-show="!!item.accounting">{{item.accounting}}</span>
                            </div>
                            <p class="cell-desc">可借{{item.quota_min}}-{{item.quota_max}}，最长可借{{item.deadline_max}}天</p>

                            <i class="icon-right"></i>
                        </div>
                    </div>
                </router-link>
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
                swipeList: [],
                bannerList: [],
                seriesRowList: [],
                seriesColumnList: [],
                reclistList: []
            };
        },
        mounted () {
            let self = this;
            self.init();
        },
        methods:{
            init(){
                let self = this
                let postData = {

                }

                fetch('bannerList', {}).then(response => {
                    self.swipeList = response.data.banner_top
                    self.seriesRowList = response.data.category_row
                    self.seriesColumnList = response.data.category_column
                    self.bannerList = response.data.banner_mid[0]
                    self.reclistList = response.data.reclist
                }).catch(function (error) {

                })
            },
            getTab(data){
                let self = this;
                self.active = data;
            },
        },
    };
</script>
