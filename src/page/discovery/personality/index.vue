<template>
    <div class="personality">
        <div v-show="videos.length>0" class="personality-body">
            <div class="ff" v-if="images.length>0">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="(image,index) in images" :key="'el'+index">
                        <img class="banner" :src="image.imageUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="song-list">
                <div class="top">
                    <span>推荐歌单</span><span>更多></span>
                </div>
                <song-list :songs="songs"></song-list>
            </div>
            <div class="private-content">
                <div class="top">
                    <span>独家放送</span><span>更多></span>
                </div>
                <private-content :videos="videos"/>
            </div>
        </div>
    </div>
</template>

<script>
    import songList from '@/components/song-list';
    import privateContent from '@/components/private-content'
    export default {
        name: "",
        data(){
            return {
                images: [],
                songs: [],
                videos: []
            }
        },
        mounted(){
            this.$api.bannerSwiperFn().then(response=>{
                this.images = response.banners
            })
            this.$api.personalizedFn().then(response=>{
                this.songs = response.result
            })
            this.$api.privatecontent().then(data=>{
                this.videos = data.result
            })
        },
        components: {

            songList,
            privateContent
        }

    }
</script>

<style lang="scss" scoped>
    .personality {
        min-width: 1080px;

    }
    .personality-body {
        padding: .4rem 4rem;
    }
    .banner {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
        -webkit-user-drag: none;
    }
    .top {
        display: flex;
        padding-bottom: .6rem;
        justify-content: space-between;
        border-bottom: 1px solid #afb1b3;
    }
</style>
