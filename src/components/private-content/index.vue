<template>
    <div class="private-content">
        <div class="video" v-for="video in videos" :key="video.id">
            <i class="iconfont icon-video"></i>
            <img :src="video.sPicUrl" alt="">
            <div class="name">
                {{video.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            videos: Array
        }
    }
</script>

<style lang="scss" scoped>
    .private-content {
        display: flex;
        .video {
            position: relative;
            width: calc(33%);
            margin: .6rem .6rem .6rem 0;
            .iconfont {
                position: absolute;
                top: .6rem;
                left: 1rem;
                width: 2rem;
                height: 1rem;
                text-align: center;
                color: white;
                border-radius: .5rem;
                background-color: rgba(0,0,0,.4);
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .name {
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                font-size: 12px;
                font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
            }
        }
    }
</style>
