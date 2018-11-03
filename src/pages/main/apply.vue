<style lang="less">
    @import "../../assets/styles/main.less";
</style>

<template>
    <div>
        <div class="apply-box">
            <div class="title-box">
                <div class="title-top" flex="">
                    <div class="title-left" flex-box="0"></div>
                    <div class="title-right" flex-box="1">
                        <h2>通过王</h2>
                        <p><span class="gold">120万</span>人申请 * <span class="gold">30分钟</span>放款</p>
                    </div>
                </div>
                <div class="title-bottom"><i></i>芝麻分 580 秒下款</div>
            </div>
            <div class="info-box">
                <div class="info-item">
                    <h2><i class="icon-dot"></i>基本信息</h2>
                    <div class="info-flex" flex="box:mean">
                        <div>
                            <p class="gray">日利率（%）</p>
                            <p>0.02%</p>
                        </div>
                        <div>
                            <p><span class="gray">额度查询：</span>1500-20000</p>
                            <p><span class="gray">期限范围：</span>7-30天</p>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <h2><i class="icon-dot"></i>申请资格</h2>
                    <p>1、年龄：满20-30周岁中国大陆公民</p>
                    <p>2、地区：河南、山东、西藏、内蒙古、港澳台地区除外</p>
                    <p>3、芝麻分550以上</p>
                    <p>4、手机号实名半年以上</p>
                    <p>5、无逾期记录</p>
                    <p>6、无金融机构、法院黑名单</p>
                    <p>7、最频繁联系人通过60次以上</p>
                </div>
                <div class="info-item">
                    <h2><i class="icon-dot"></i>申请资料</h2>
                    <p>1、二代身份证</p>
                    <p>2、手机号运营商认证</p>
                    <p>3、芝麻分</p>
                    <p>4、银行卡信息</p>
                    <p>5、征信认证</p>
                </div>
                <div class="info-item">
                    <h2><i class="icon-dot"></i>产品介绍</h2>
                    <p>1、审核方式：线上自动审核加人工辅助</p>
                    <p>2、审核放款时间：1分钟</p>
                    <p>3、还款方式：银行代扣或手动还款</p>
                </div>
            </div>
            <div class="btn-box">
                <mt-button type="primary" @click="getApply">立即申请</mt-button>
            </div>
        </div>
        <div class="dialog-box" v-if="show">
            <div class="dialog-wrap">
                <div class="dialog-title">验证手机号提高通过率<i class="" @click="getClose"></i></div>
                <div class="form-box">
                    <p class="input-box">
                        <i class="icon-input icon-account"></i>
                        <mt-field label="手机号" placeholder="请输入手机号" v-model="demo"></mt-field>
                    </p>
                    <p class="input-box input-code">
                        <i class="icon-input icon-account"></i>
                        <mt-field label="" placeholder="请输入图形验证码" v-model="demo"></mt-field>
                        <img src="../../assets/img/banner.jpg" height="45px" width="100px">
                    </p>
                    <p class="input-box input-code">
                        <i class="icon-input icon-account"></i>
                        <mt-field label="" placeholder="请输入验证码" v-model="demo"></mt-field>
                        <span class="code" @click="getCode">获取验证码</span>
                    </p>
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
        data() {
            return {
                demo:null,
                show:false,
            };
        },
        mounted() {
            let self = this;
            self.init();
        },
        methods: {
            init(){
                let self = this;
            },
            getCode(){

            },
            getClose(){
                this.show = false;
            },
            getApply(){
                //this.show = true;
            }
        },
    };
</script>
