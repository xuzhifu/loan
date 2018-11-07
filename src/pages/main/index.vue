<style lang="less">
</style>

<template>
    <div class="index-box">
        <div class="banner-box">
            <router-link to="/"><img src="../../assets/img/banner.jpg"/></router-link>
        </div>
        <div class="catagory-box" flex="box:mean">
            <router-link to="/"><i class="catagory-1"></i><p>快速借钱</p></router-link>
            <router-link to="/"><i class="catagory-2"></i><p>2千以下</p></router-link>
            <router-link to="/"><i class="catagory-3"></i><p>2千-1万</p></router-link>
            <router-link to="/"><i class="catagory-4"></i><p>1万-6万</p></router-link>
            <router-link to="/"><i class="catagory-5"></i><p>6万以上</p></router-link>
        </div>
        <div class="link-img">
            <router-link to="/"><img src="../../assets/img/link-1.jpg"/></router-link>
            <router-link to="/"><img src="../../assets/img/link-2.jpg"/></router-link>
            <router-link to="/"><img src="../../assets/img/link-3.jpg"/></router-link>
            <router-link to="/"><img src="../../assets/img/link-4.jpg"/></router-link>
            <router-link to="/"><img src="../../assets/img/link-5.jpg"/></router-link>
            <router-link to="/"><img src="../../assets/img/link-6.jpg"/></router-link>
        </div>
        <div class="banner-min">
            <router-link to="/"><img src="../../assets/img/banner-min.jpg"/></router-link>
        </div>
        <div class="item-box">
            <div class="item-title">
                <p class="fc-gold"><i class="icon-great"></i>推荐贷款列表 <router-link to="/"><span>更多产品</span><i class="icon-right"></i></router-link></p>

            </div>
            <div class="item-list">
                <router-link to="/">
                    <div class="item" flex="dir:left box:justify">
                        <div class="item-left"></div>
                        <div class="item-center">
                            <h2>小米管家</h2>
                            <span class="tips-gold">芝麻分 580 秒下款</span>
                            <p class="desc">可借1千-5万，最长可借365天</p>
                        </div>
                        <div class="item-right"><i class="icon-right"></i></div>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class="item" flex="dir:left box:justify">
                        <div class="item-left"></div>
                        <div class="item-center">
                            <h2>小米管家</h2>
                            <span class="tips-gold">芝麻分 580 秒下款</span>
                            <p class="desc">可借1千-5万，最长可借365天</p>
                        </div>
                        <div class="item-right"><i class="icon-right"></i></div>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class="item" flex="dir:left box:justify">
                        <div class="item-left"></div>
                        <div class="item-center">
                            <h2>小米管家</h2>
                            <span class="tips-gold">芝麻分 580 秒下款</span>
                            <span class="tips-blue">线上审核</span>
                            <p class="desc">可借1千-5万，最长可借365天</p>
                        </div>
                        <div class="item-right"><i class="icon-right"></i></div>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class="item" flex="dir:left box:justify">
                        <div class="item-left"></div>
                        <div class="item-center">
                            <h2>小米管家</h2>
                            <span class="tips-gold">芝麻分 580 秒下款</span>
                            <p class="desc">可借1千-5万，最长可借365天</p>
                        </div>
                        <div class="item-right"><i class="icon-right"></i></div>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class="item" flex="dir:left box:justify">
                        <div class="item-left"></div>
                        <div class="item-center">
                            <h2>小米管家</h2>
                            <span class="tips-gold">芝麻分 580 秒下款</span>
                            <p class="desc">可借1千-5万，最长可借365天</p>
                        </div>
                        <div class="item-right"><i class="icon-right"></i></div>
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
