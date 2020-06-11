<template>
    <div class="play-list" v-if="playlist">
        <div class="play-list-top">
            <div class="left">
                <img :src="playlist.coverImgUrl" alt="">
            </div>
            <div class="right">
                <div class="playlist">
                    <div class="name"><span class="icon-playlist">歌单</span>{{playlist.name}}</div>
                    <div class="playlist-state">
                        <div class="song-count">
                            <span>歌曲数</span>
                            <span>47</span>
                        </div>
                        <div class="play-count">
                            <span>播放数</span>
                            <span>98677</span>
                        </div>
                    </div>
                </div>
                <div class="creator-wrap">
                    <img :src="playlist.creator.avatarUrl" alt="">
                    <p class="nickname">{{playlist.creator.nickname}}</p>
                </div>
                <div class="play-wrap">
                    <div class="all-play" @click="allPlay">
                        <i class="iconfont icon-bofang3"></i>
                        全部播放
                    </div>
                </div>
                <div class="dec-wrap">
                    <div class="tag">
                        标签: <span v-for="tag in playlist.tags" :key="tag">{{tag}}</span>
                    </div>
                    <div  :class="{'description-active':!isShow,description: isShow}">
                        简介: {{playlist.description}}
                    </div>
                    <div class="show" v-if="playlist.description.length > 150" @click="isShow = !isShow">
                        <i class="iconfont icon-go"></i>
                    </div>
                </div>
            </div>
        </div>
        <songs :songDetail="songDetail"></songs>
    </div>
</template>

<script>
    import songs from '@/components/songs'
    export default {
        name: "playlist",
        data(){
          return {
              playlist: null,
              isShow: false,
              list: null,
              songDetail: []
          }
        },
        mounted(){
            this.$api.getPlaylist(this.$route.params.playlistID).then(data=>{
                this.playlist = data.playlist
                let list = {};
                let playlist = data.playlist;
                list.coverImgUrl = playlist.coverImgUrl;
                list.name = playlist.name;
                list.creator = {}
                list.creator.avatarUrl = playlist.creator.avatarUrl;
                list.tags = playlist.tags;
                list.description = playlist.description;
                for(let i=0;i<playlist.trackIds.length;i++){
                    this.$api.getSongDetail(this.trackIds[i].id).then(data=>{
                        let song = {};
                        song.name = data.songs[0].name;
                        song.id = data.songs[0].id;
                        song.singer = data.songs[0].ar[0].name;
                        song.picUrl = data.songs[0].al.picUrl;
                        song.albumName = data.songs[0].al.name
                        song.dt = data.songs[0].dt;
                        this.songDetail.splice(i,0,song)
                    })
                }
            })
        },
        computed: {
            trackIds(){
             return this.playlist.trackIds

          }
        },
        methods: {
            handleShow(){},
            allPlay(){
                this.$store.dispatch('updateSongStore',{songs: this.songDetail,action: 'start'})
            }
        },
        components: {
            songs
        }
    }
</script>

<style lang="scss" scoped>
    .play-list {
        .play-list-top {
            display: flex;
            padding: 1rem;
            .left {
                height: 14rem;
                width: 14rem;
                background-color: #8fc8f5;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .right {
                flex: 1;
                margin-left: 1rem;
                .playlist {
                    display: flex;
                    justify-content: space-between;
                    height: 3rem;
                    .name {
                        align-self: center;
                        font-size: 1.4rem;
                        display: flex;
                        font-weight: bold;
                        .icon-playlist {
                            border: 1px solid #e03f40;
                            color: #e03f40;
                            font-size: .8rem;
                            align-self: center;
                            margin: 0 .4rem 0 0 ;
                            padding: .2rem .3rem;
                            box-sizing: border-box;
                        }
                    }
                    .playlist-state {
                        display: flex;
                        .song-count,.play-count {
                            display: flex;
                            flex-direction: column;
                            text-align: right;
                            justify-content: space-evenly;
                            font-size: .8rem;
                            font-weight: bold;
                            margin: 0 .4rem;
                            color: rgba(39, 38, 38, 0.6);
                        }
                        .song-count {
                            border-right: 1px solid #848383;
                            padding-right: .8rem;
                        }
                    }
                }
                .creator-wrap {
                    display: flex;
                    img{
                        height: 2rem;
                        border-radius: 1rem;
                        margin-right: .4rem;
                    }
                    .nickname {
                        margin: 0;
                        line-height: 2rem;
                    }
                }
                .play-wrap {
                    margin: 1rem 0;
                    .all-play {
                        width: 6rem;
                        background-color: #44aaf8;
                        color: white;
                        padding: .3rem .5rem;
                        border-radius: .2rem;
                    }
                }
                .dec-wrap {
                    position: relative;
                    .tag {
                        span {
                            color: deepskyblue;
                            margin: 0 .2rem;
                        }
                    }

                    .description-active {
                        display: -webkit-box;
                        margin-right: 3rem;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .description {
                        margin: .4rem 0;

                        padding-right: 6rem;
                        white-space: pre-line;
                    }
                    .show {
                        position: absolute;
                        right: 2rem;
                        top: 0rem;
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }
</style>
