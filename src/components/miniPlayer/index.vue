<template>
    <div class="mini-player">
        <div class="song">
            <div class="img" @click="triggerShow">
                <img :src="song.picUrl" alt="">
            </div>
            <div class="info">
                <span class="name">{{song.name}}</span>
                <span class="singer">{{song.singer}}</span>
                <span class="time" v-if="song">{{song.dt | dt}}</span>
            </div>
        </div>
        <div class="control">
            <div class="before" @click="preSong();stopa()">
                <i class="iconfont icon-iconfontsvgprevious"></i>
            </div>
            <div class="play-state" @click="triggerPlayState">
                <i class="iconfont" :class="icon"></i>
            </div>
            <div class="next" @click="nextSong();stopa()">
                <i class="iconfont icon-iconfontsvgnext"></i>
            </div>
        </div>
        <div class="right"></div>
        <audio ref="audio" :src="songUrl"></audio>
        <div class="progress-box">
            <progressbar :play-state="playState" :time="song.dt" @currentTime="playTime"></progressbar>
        </div>
    </div>
</template>

<script>
    import progressbar from '@/components/progressbar';
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "",
        data(){
            return {
                songUrl: '',
                icon: 'icon-play',
                song: {},
                stop: false,
                playState: false,
                audio: null,
            }
        },
        mounted(){
            this.$refs.audio.onended = ()=>{
                this.nextSong();
            }
            this.$refs.audio.addEventListener('play',function () {
            })
            this.audio = this.$refs.audio;
            this.audio.oncanplay =  () =>{
                this.audio.play()
                this.playState = true
                this.ChangePlay(true)
            }
        },
        components: {
            progressbar
        },
        computed: {
            songId: function () {
                return this.getSongId;
            },
            // ...mapGetters({getSongId: 'playStore/getSongId'}),
            // ...mapGetters({songIndex: 'playStore/getSongIndex',getSongByIndex: 'playStore/getSongByIndex'}),
            ...mapGetters('playStore',['getSongId','getSongIndex','getSongByIndex'])
        },
        watch: {
            'songId': function (id) {
                this.songUrl = ''
                if (id !== 0){
                    this.icon = 'icon-bofangzanting'
                }
                this.$api.getSongUrl(id).then(data=>{
                    this.songUrl = data.data[0].url;
                })
                this.song = this.getSongByIndex(this.getSongIndex)
                this.audio.pause()
                this.playState = false
                this.$children[0].scaleX = 0
            },
            'playState': function (state) {
                if (state){
                    this.audio.play()
                    this.icon = 'icon-bofangzanting'
                }else {
                    this.audio.pause()
                    this.icon = 'icon-play';
                }
            }
        },
        methods: {
            playTime(value){
                this.$refs.audio.currentTime = value
            },
            triggerPlayState(){
                this.playState = !this.playState
                this.ChangePlay(!this.$store.state.player.isPlay)
            },
            stopa(){
                this.ChangePlay(false)
            },
            ...mapActions({nextSong: 'playStore/nextSong',preSong: 'playStore/preSong',triggerShow: 'player/triggerShow',ChangePlay: 'player/ChangePlay'}),
        }
    }
</script>

<style lang="scss" scoped>
    .mini-player {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        height: 4rem;
        display: flex;
        background-color: #ffffff;
        box-shadow: 0px -1px 1px #c0bebe;
        z-index: 999;
        .song {
            flex: 4;
            display: flex;
            box-sizing: border-box;
            .img {
                width: 4rem;
                margin:0 .4rem 0 2rem;
                border-radius: 2rem;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /*animation: pinwheel 4s infinite linear;*/
                }
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .name {
                    font-size: 1.2rem;
                }
                .singer {
                    font-size: .8rem;
                    color: #969595;
                }
            }
        }
        .control {
            flex: 2;
            align-self: center;
            display: flex;
            justify-content: center;
            .play-state,.before,.next {
                position: relative;
                margin: 0 .6rem;
            }
            .play-state {
                width: 3rem;
                height: 3rem;
                border-radius: 1.5rem;
                background-color: red;
                i {
                    color: whitesmoke;
                }
                .icon-play {
                    color: whitesmoke;
                    transform: translate(-30%,-50%);
                }
            }
            .before {

            }
            .iconfont {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                font-size: 1.2rem;
                color: red;
            }
        }
        .right {
            flex: 4;
        }
        .progress-box {
            position: absolute;
            top: -.4rem;
            right: 0;
            left: 0;
        }
    }
</style>
