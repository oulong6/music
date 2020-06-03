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
                    <div class="all-play">
                        <i class="iconfont icon-bofang3"></i>
                        全部播放
                    </div>
                </div>
                <div class="dec-wrap">
                    <div class="tag">
                        标签: <span v-for="tag in playlist.tags" :key="tag">{{tag}}</span>
                    </div>
                    <div class="description">
                        简介: {{playlist.description}}
                    </div>
                    <div class="show" v-if="playlist.description.length > 150" @click="handleShow">
                        <i class="iconfont icon-go"></i>
                    </div>
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
              playlist: undefined
          }
        },
        mounted(){
            this.$api.getPlaylist(this.$route.params.playlistID).then(data=>{
                this.playlist = data.playlist
            })
            let date = new Date(1023266411576);
            console.log(date.getFullYear())
        },
        methods: {

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
                height: 14rem;
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
                    .description {
                        margin: .4rem 0;
                        display: -webkit-box;
                        padding-right: 6rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .show {
                        position: absolute;
                        right: 2rem;
                        top: 2rem;
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }
</style>
