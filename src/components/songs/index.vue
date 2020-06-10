<template>
    <div class="songs">
        <div class="songs-top">
            <router-link to="" tag="div">歌曲列表</router-link>
            <router-link to="" tag="div">评论(26040)</router-link>
        </div>
        <div class="song-list">
            <song :songDetail="songDetail"></song>
        </div>
    </div>
</template>

<script>
   import song from '@/components/songs/song'
    export default {
        name: "",
        props: {
            songDetail: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {

            }
        },
        components: {
            song
        }
    }
</script>

<style lang="scss" scoped>
    .songs {
        .songs-top {
            display: flex;
            div {
                margin: 0 2rem;
            }
        }
    }
</style>
