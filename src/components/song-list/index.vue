<template>
    <div class="song-list">
        <div class="song" v-for="playlist in songs" :key="playlist.id" @click="toPlaylist(playlist.id)">
            <div class="listen">
               <i class="iconfont icon-V"></i> {{playlist.playCount | playCount}}
            </div>
            <div class="copywriter" v-if="playlist.copywriter">
                {{playlist.copywriter}}
            </div>
            <div class="img">
                <img :src="playlist.picUrl || playlist.coverImgUrl">
                <div class="play">
                    <i class="iconfont">
                        &#xe625;
                    </i>
                </div>
            </div>
            <div class="song-name">
                {{playlist.name}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "song-list",
        props: {
            songs: {
                type: Array
            }
        },
        methods: {
          toPlaylist(id){
             this.$router.push({path: `/playlist/${id}`})
          }
        },
        filters: {
            playCount(v){
                return String(v).replace(/(\d{4})$/,'万')
            }
        },

    }
</script>

<style lang="scss" scoped>
    .font {
        font-size: 12px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .song-list {
        display: flex;
        flex-wrap: wrap;
        .song {
            position: relative;
            width: calc(19% - .57143rem);
            /*margin: 1.3rem 1.5rem 1.3rem 0 ;*/
            margin: 1rem auto;
            overflow: hidden;
            .listen {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background-color: rgba(0,0,0,.4);
                color: white;
                text-align: right;
                z-index: 2;
                @extend .font;
            }
            .copywriter {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2rem;
                background-color: rgba(0,0,0,.4);
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                transform: translateY(-2rem);
                transition: all .4s cubic-bezier(1,.04,.65,.49);
                color: white;
                z-index: 2;
                @extend .font;
            }
            &:hover .copywriter {
                transform: translateY(0rem);
            }
            &:hover .listen {
                /*display: none;*/
            }
            .img {
                position: relative;
                height: 14rem;
                background-color: #f9f9f9;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                &:hover .play {
                    display: block;
                }
                .play {
                    display: none;
                    position: absolute;
                    right: 1rem;
                    bottom: 1rem;
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: .8rem;
                    background-color: rgba(37, 37, 37, 0.4);
                    &:hover {
                        background-color: rgba(37, 37, 37, 0.8);
                        cursor: pointer;
                    }
                    i {
                       position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        color: white;
                        font-size: 1.6rem;
                    }
            }

            }
            .song-name {
                font-size: 12px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
            }
            &:nth-of-type(1) {
                margin-left: 0;
            }
            &:nth-of-type(6) {
                margin-left: 0;
            }
            &:nth-of-type(5) {
                margin-right: 0;
            }
            &:nth-of-type(10) {
                margin-right: 0;
            }
        }
    }
</style>
