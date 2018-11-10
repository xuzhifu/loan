<style lang="less">

</style>

<template>
    <div class="ui-borrow-money-box">
        <div class="ui-info-box">
            <div class="ui-borrow-info" flex="dir:top main:justify">
                <div class="ui-title-box">
                    <div class="cell-title">预计可借金额(元)</div>
                    <div class="cell-number">8000</div>
                </div>
                <div class="ui-step">
                    <ul flex="main:justify">
                        <li flex="cross:center"><span>1</span>填写资料</li>
                        <li flex="cross:center"><span>2</span>一键投递</li>
                        <li flex="cross:center"><span>3</span>最快一分钟放款</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="ui-button-box" flex="main:center">
            <button class="cell-button-orange">立即借款</button>
        </div>


        <div class="ui-marquee-box">
            <div class="ui-title">
                <span>已有<em class="fc-orange">22880678</em>人借款成功</span>
            </div>

            <div class="ui-list-box" flex="dir:left box:first">
                <div class="ui-thumb" flex="dir:bottom">
                    <img src="../../assets/img/money-bg.png" />
                </div>

                <div class="ui-list">
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                    <li>136****7796成功借款20000元</li>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "borrow-money",
        mounted() {
            let self = this;
            self.init();
        },
        methods: {
            init(){
                let self = this;
                let postData = {
                }
                fetch('borrowMoney', {}).then(response => {

                }).catch(function (error) {})
            },

        },
    }
</script>

