<style lang="less">
    @import "../../assets/styles/main.less";
</style>

<template>
    <div class="loan-box">
        <div class="filter-box">
            <div class="filter-item">
                <span class="filter-title">类型：</span>
                <span class="filter-tab">
                    <span :class="{ active: item.active }" @click="getTypeHandle(index)" v-for="(item, index) in typeOptions" :key="index" >{{ item.label }}</span>
                </span>
            </div>
            <div class="filter-item">
                <span class="filter-title">身份：</span>
                <span class="filter-tab">
                    <span :class="{ active: item.active }" @click="getIdentityHandle(index)" v-for="(item, index) in identityOptions" :key="index" >{{ item.label }}</span>
                </span>
            </div>
        </div>
        <div class="loan-list">
            <div class="loan-item" flex="dir:left box:first">
                <div class="loan-left">
                    <div class="loan-top" flex="">
                        <div class="img" flex-box="0"></div>
                        <div class="loan-title" flex-box="1">
                            <h2>咖啡钱包</h2>
                            <span>急速审核，轻松借款</span>
                        </div>
                    </div>
                    <div class="loan-bottom" flex="box:mean">
                        <div>
                            <p class="fc-gold">1600-20000</p>
                            <p class="fc-gray">可借额度(元)</p>
                        </div>
                        <div>
                            <p>0.02%</p>
                            <p class="fc-gray">日利率(%)</p>
                        </div>
                        <div>
                            <p>30天</p>
                            <p class="fc-gray">最长可借时间</p>
                        </div>
                    </div>
                </div>
                <div class="loan-right" flex="main:center cross:center">
                    <div>
                        <p><span class="fc-gold">1888</span>万人已申请</p>
                        <mt-button type="primary">申请</mt-button>
                    </div>
                </div>
            </div>
            <div class="loan-item" flex="dir:left box:first">
                <div class="loan-left">
                    <div class="loan-top" flex="">
                        <div class="img" flex-box="0"></div>
                        <div class="loan-title" flex-box="1">
                            <h2>咖啡钱包</h2>
                            <span>急速审核，轻松借款</span>
                        </div>
                    </div>
                    <div class="loan-bottom" flex="box:mean">
                        <div>
                            <p class="fc-gold">1600-20000</p>
                            <p class="fc-gray">可借额度(元)</p>
                        </div>
                        <div>
                            <p>0.02%</p>
                            <p class="fc-gray">日利率(%)</p>
                        </div>
                        <div>
                            <p>30天</p>
                            <p class="fc-gray">最长可借时间</p>
                        </div>
                    </div>
                </div>
                <div class="loan-right" flex="main:center cross:center">
                    <div>
                        <p><span class="fc-gold">1888</span>万人已申请</p>
                        <mt-button type="primary">申请</mt-button>
                    </div>
                </div>
            </div>
            <div class="loan-item" flex="dir:left box:first">
                <div class="loan-left">
                    <div class="loan-top" flex="">
                        <div class="img" flex-box="0"></div>
                        <div class="loan-title" flex-box="1">
                            <h2>咖啡钱包</h2>
                            <span>急速审核，轻松借款</span>
                        </div>
                    </div>
                    <div class="loan-bottom" flex="box:mean">
                        <div>
                            <p class="fc-gold">1600-20000</p>
                            <p class="fc-gray">可借额度(元)</p>
                        </div>
                        <div>
                            <p>0.02%</p>
                            <p class="fc-gray">日利率(%)</p>
                        </div>
                        <div>
                            <p>30天</p>
                            <p class="fc-gray">最长可借时间</p>
                        </div>
                    </div>
                </div>
                <div class="loan-right" flex="main:center cross:center">
                    <div>
                        <p><span class="fc-gold">1888</span>万人已申请</p>
                        <mt-button type="primary">申请</mt-button>
                    </div>
                </div>
            </div>
            <div class="loan-item" flex="dir:left box:first">
                <div class="loan-left">
                    <div class="loan-top" flex="">
                        <div class="img" flex-box="0"></div>
                        <div class="loan-title" flex-box="1">
                            <h2>咖啡钱包</h2>
                            <span>急速审核，轻松借款</span>
                        </div>
                    </div>
                    <div class="loan-bottom" flex="box:mean">
                        <div>
                            <p class="fc-gold">1600-20000</p>
                            <p class="fc-gray">可借额度(元)</p>
                        </div>
                        <div>
                            <p>0.02%</p>
                            <p class="fc-gray">日利率(%)</p>
                        </div>
                        <div>
                            <p>30天</p>
                            <p class="fc-gray">最长可借时间</p>
                        </div>
                    </div>
                </div>
                <div class="loan-right" flex="main:center cross:center">
                    <div>
                        <p><span class="fc-gold">1888</span>万人已申请</p>
                        <mt-button type="primary">申请</mt-button>
                    </div>
                </div>
            </div>
            <div class="loan-item" flex="dir:left box:first">
                <div class="loan-left">
                    <div class="loan-top" flex="">
                        <div class="img" flex-box="0"></div>
                        <div class="loan-title" flex-box="1">
                            <h2>咖啡钱包</h2>
                            <span>急速审核，轻松借款</span>
                        </div>
                    </div>
                    <div class="loan-bottom" flex="box:mean">
                        <div>
                            <p class="fc-gold">1600-20000</p>
                            <p class="fc-gray">可借额度(元)</p>
                        </div>
                        <div>
                            <p>0.02%</p>
                            <p class="fc-gray">日利率(%)</p>
                        </div>
                        <div>
                            <p>30天</p>
                            <p class="fc-gray">最长可借时间</p>
                        </div>
                    </div>
                </div>
                <div class="loan-right" flex="main:center cross:center">
                    <div>
                        <p><span class="fc-gold">1888</span>万人已申请</p>
                        <mt-button type="primary">申请</mt-button>
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
                type : null,
                typeOptions : [
                    {
                        label : '放款快',
                        value : 1,
                        active : false,
                    },
                    {
                        label : '高额度',
                        value : 2,
                        active : false,
                    },
                    {
                        label : '利息低',
                        value : 3,
                        active : false,
                    },
                    {
                        label : '黑名单',
                        value : 4,
                        active : false,
                    },
                ],
                identity:1,
                identityOptions:[
                    {
                        label : '不限',
                        value : 1,
                        active : true,
                    },
                    {
                        label : '上班族',
                        value : 2,
                        active : false,
                    },
                    {
                        label : '其它',
                        value : 3,
                        active : false,
                    },
                ],
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
            getTypeHandle(index){
                let self = this;
                self.typeOptions && self.typeOptions.forEach((n, i) => {
                    self.typeOptions[i].active = false;
                })
                self.typeOptions[index].active = true;
                self.type = self.typeOptions[index].value;
            },
            getIdentityHandle(index){
                let self = this;
                self.identityOptions && self.identityOptions.forEach((n, i) => {
                    self.identityOptions[i].active = false;
                })
                self.identityOptions[index].active = true;
                self.identity = self.identityOptions[index].value;
            },
        },
    };
</script>
