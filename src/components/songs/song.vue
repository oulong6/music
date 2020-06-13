<template>
    <div class="songs">
        <div class="songs-top gray">
            <div class="id"></div>
            <div class="img"></div>
            <div class="title">音乐标题</div>
            <div class="singer">歌手</div>
            <div class="album">专辑</div>
            <div class="time">时长</div>
        </div>
        <div class="song" v-for="(song,index) in songDetail" :key="song.id" @click="play(index)"  :class="{'current': song.id === songId}">
            <div class="id">
                {{index+1}}
<!--                <i class="iconfont " :class="{'icon-weibiaoti&#45;&#45;1': song.id === songId}"></i>-->
            </div>
            <div class="img">
                <img  alt="" v-lazy-loading :data-src="song.picUrl">
                <i class="iconfont icon-bofang3"></i>
            </div>
            <div class="title">{{song.name}}</div>
            <div class="singer gray">{{song.singer}}</div>
            <div class="album gray">{{song.albumName}}</div>
            <div class="time">{{song.dt | dt}}</div>
        </div>
    </div>
</template>

<script>
    import me from '@/assets/me.png'
    export default {
        name: "",
        props: {
            songDetail: {
                type: Array
            }
        },
        data(){
            return {
                me
            }
        },
        computed: {
          songId(){
              return this.$store.getters.getSongId
          }
        },
        watch: {
        },
        methods: {
          play(index){
              this.$store.dispatch('updateSongStore',{songs: this.songDetail,action: 'current',index: index})
          }
        },
        filters: {
            singer:function (value) {
                return value.map(item=>{
                    return item.name
                }).join('/')
            },
        }
    }
</script>

<style lang="scss" scoped>
    .songs-top {
        display: flex;
        justify-content: space-evenly;
        text-align: center;

        div:not(.img,):not(.id) {
            flex: 3;
        }
        .id {
            flex: .4;
        }
        div {
            align-self: center;
        }
        .img {
            flex: 2;
            img {
                width: 4rem;
                height: 4rem;
                object-fit: cover;
            }
        }

    }
    .song {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        div:not(.img,):not(.id) {
            flex: 3;
        }
        .id {
            flex: .6;
            position: relative;
            .icon-weibiaoti--1 {
                display: inline-block;
                position: absolute;
                left: 2.2rem;
                animation: beat 1s infinite linear alternate;
            }
        }
        div {
            align-self: center;
        }
        .img {
            flex: 2;
            position: relative;
            img {
                width: 4rem;
                height: 4rem;
                object-fit: cover;
                background-color: whitesmoke;
            }
            .iconfont {
                position: absolute;
                display: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: red;
                font-size: 1.2rem;
            }
        }
        div {
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
        }
    }

    .song{
        padding: .4rem 0;
    }
    .song:hover {
        background-color: #e6e8e8;
        & .icon-bofang3 {
            display: block;
        }
    }
    .current {
        color: #ec6f84;
    }
    @keyframes beat {
        0% {
            font-size: .8rem;
        }
        100% {
            font-size: 1.2rem;
        }
    }
</style>
