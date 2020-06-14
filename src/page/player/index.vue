<template>
    <div class="player theme-brand">
        <div class="content">
            <div class="sing-top">
                <div class="record-box">
                    <img class="bar" src="data:image/png;base64,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" alt="">
                    <img class="playBar" :src="playBar" alt="" :class="{'playBar-active': isPlay}">
                    <div class="record">
                        <img :src="song.picUrl" alt="" :class="{'rotate-active': isPlay}">
                    </div>
                </div>
                <div class="lyrics-box"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import me from '@/assets/me.png'
    import playBar from '@/assets/play-bar.png'
    import {mapState} from 'vuex'
    export default {
        name: "",
        data(){
          return {
              me,
              playBar,
          }
        },
        computed: {
            ...mapState('player',{isPlay: 'isPlay'}),
            ...mapState('playStore',{song: 'song'}),
            },

    }
</script>

<style lang="scss" scoped>
    .player {
        position: absolute;
        top: 3.4rem;
        left: 0;
        right: 0;
        bottom: 4rem;
        z-index: 2;
        overflow-y: auto;
        .content {
            width: 70rem;
            height: 100rem;
            margin: 0 auto;

            .sing-top {
                height: 35rem;
                display: flex;
                .record-box {
                    flex: 2;
                    position: relative;
                    box-sizing: border-box;
                    .bar {
                        width: 2rem;
                        height: 2rem;
                        top: -.3rem;
                        object-fit: cover;
                        z-index: 2;
                    }
                     > img {
                        position: absolute;
                        left: 50%;
                        top: 0;
                    }
                    .playBar {
                        transform-origin: left top;
                        transform: translate(1rem,1rem) rotateZ(-40deg);
                        height: 8rem;
                        transition: transform .4s ease-in;
                    }
                    .playBar-active {
                        transform: rotateZ(10deg);
                    }
                    .record {
                        width: 16rem;
                        height: 16rem;
                        margin: 6rem auto;
                        border-radius: 8rem;
                        /*box-shadow: 0 0 0 .2rem #c8c6c6,0 0 0 .4rem #dbdbdb,0 0 0 .6rem #dddbdb,0 0 0 .8rem #edecec,0 0 0 1rem #ffffff;*/
                        box-shadow: 0 0 0 .8rem #e1e1e1;
                        background-color: #545353;
                        /*background-image:  repeating-radial-gradient(black 1px,white 1px, white 2px,#6e6e6e 2px, #6e6e6e 3px);*/
                        padding: 2rem;
                        box-sizing: border-box;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            transform: rotateZ(30deg);
                            object-fit: cover;
                            animation: active 20s  infinite  linear;
                            animation-play-state: paused;
                        }
                        .rotate-active {
                            animation-play-state: running;
                        }

                    }
                }
                .lyrics-box {
                    flex: 3;
                    background-color: #55a532;
                }
            }
        }
    }
    @keyframes active {
        0% {
            transform: rotateZ(30deg);
        }
        100% {
            transform: rotateZ(390deg);
        }
    }
</style>
