<template>
    <div class="lyrics-warp">
        <div class="song-name">{{lyrics[0]}}</div>
        <div class="lyrics" ref="lyrics">
            <div class="content">
                <div class="lyric-item" v-for="(item,index) in lyric" :key="index">
                    <span v-html="item"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    var moment = require('moment')
    export default {
        name: "",
        props: {
            lyrics: Array,
            lyricTime: Array
        },
        mounted(){
            this.$nextTick(()=>{
               new BScroll(this.$refs.lyrics)
           })

        },
        computed: {
            lyric: function () {
              return this.lyrics.slice(1)
            },
        },
        methods: {
            mouseenter(event){
                event.target.style.overflowY = 'auto'
            },
            mouseleave(event){
                event.target.style.overflowY = 'hidden'
            }
        },
        watch: {
            'lyricTime': function () {
                console.log(moment(this.lyricTime[0]).format('mm:ss.sssZ'),'//');
            }
        }
    }
</script>

<style lang="scss" scoped>
.lyrics-warp {
    .lyrics {
        height: 35rem;
        overflow: hidden;
    }
    .song-name {
        text-align: center;
        font-size: 2.3rem;
    }
    .lyric-item {
        padding: .2rem 0;
        line-height: 1.6rem;
        text-align: center;
        font-size: 1.2rem;
        height: 1.6rem;
    }
}
</style>
