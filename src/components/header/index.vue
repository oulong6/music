<template>
    <div :style="{backgroundColor: theme}" class="header">
        <div class="left">
           <div class="screen-control">
               <div class="icon home">
                   <i class="iconfont icon-home"></i>
               </div>
               <div class="icon normal" @click="cancelFullScreen">
                   <i class="iconfont icon-zuixiaohua"></i>
               </div>
               <div class="icon full-screen" @click="fullScreen">
                   <i class="iconfont icon-quanping"></i>
               </div>
           </div>
            <div class="history">
                <div class="black">
                    <i class="iconfont icon-houtui"></i>
                </div>
                <div class="go">
                    <i class="iconfont icon-go"></i>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="search">
               <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜索">
            </div>
            <div ref="skins" class="skin" tabindex="-1">
                <i class="iconfont icon-pifu"></i>
                <div ref="skin" class="skins" tabindex="-1">
                    <div class="theme red" data-color="#c62f2f" @click="changTheme"></div>
                    <div class="theme blue " data-color="#42a7f8" @click="changTheme"></div>
                    <div class="theme green" data-color="#39b674" @click="changTheme"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                theme: '#42a7f8'
            }
        },
        mounted() {
            this.$refs.skins.addEventListener('focus', () =>{
                this.$refs.skin.style.display = 'flex';
            })
            this.$refs.skin.addEventListener('blur', () =>{
                this.$refs.skin.style.display = 'none';
            })
        },
        methods: {
            fullScreen(){
                let el = document.documentElement;
                let rfs = el.requestFullscreen;
                if (rfs){
                    rfs.call(el);
                }
            },
            cancelFullScreen(){
                let el = document;

                let cfs = el.cancelFullScreen || el.mozCancelFullScreen || el.msExitFullscreen || el.webkitExitFullscreen || el.exitFullscreen
                if (cfs) {
                    cfs.call(el)
                }
            },
            changTheme(e){
               this.theme = e.target.dataset.color;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        height: 3.4rem;
        padding-right: 2rem;
        justify-content: space-between;
        background-color: #8fc8f5;
        .left {
            display: flex;
            flex-basis: 16rem;
            .screen-control {
                display: flex;
                flex-grow: 3;
                padding: {
                    top: 1rem;
                    left: 2rem;
                    right: 2rem;
                }
                .icon {
                    $width: 1.1rem;
                    width: $width;
                    height: $width;
                    margin: .2rem;
                    border-radius: $width / 2;
                    background-color: red;
                    text-align: center;
                    box-sizing: border-box;
                    .iconfont {
                        font-size: 6px;
                        color: transparent;
                        transition: font-size .1s linear;
                    }
                    &:hover .iconfont{
                        color: #5f5e5e;
                        font-size: 14px;
                    }
                    &:nth-of-type(1){
                        background-color: #ed655a;
                    }
                    &:nth-of-type(2){
                        background-color: #e0c04c;
                    }
                    &:nth-of-type(3){
                        background-color: #72be47;
                    }
                }

            }
            .history {
                flex-grow: 1;
                display: flex;
                padding-top: 1rem;
                .black,.go {
                    flex: 1;
                    font-weight: bold;
                    color: white;
                }
            }
        }
        .right {
            display: flex;
            .search {
                background-color: #f2f2f2;
                width: 14rem;
                height: 2rem;
                align-self: center;
                border-radius: 1rem;
                padding: .3rem .4rem 0rem;
                box-sizing: border-box;
                .iconfont {
                    margin-right: .3rem;
                }
                input {
                    padding-left: .2rem;
                    width: 11rem;
                    outline: none;
                    border: none;
                    background-color: #f2f2f2;
                    font-weight: bold;
                }
            }
            .skin {
                position: relative;
                align-self: center;
                margin-left: 1rem;
                outline: none;
                .skins {
                    position: absolute;
                    left: -10rem;
                    top: 2rem;
                    width: 12rem;
                    height: 4rem;
                    display: none;
                    background-color: #ede9e9;
                    padding: .4rem;
                    box-sizing: border-box;
                    outline: none;
                    z-index: 99;
                    &::after {
                        position: absolute;
                        top: -1.2rem;
                        right: 1rem;
                        content: "";
                        border: 10px solid #ede9e9;
                        border-color: transparent transparent #ede9e9 transparent;
                    }
                    .theme {
                        margin: .3rem;
                        flex: 1;
                        &.red {
                            background-color: #c62f2f;
                        }
                        &.green {
                            background-color: #39b674;
                        }
                        &.blue {
                            background-color: #42a7f8;
                        }

                    }
                }
            }
        }
    }

</style>
