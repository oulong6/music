<template>
    <div class="nva-list">
        <router-link to="/discovery/personality/" tag="div">
            个性推荐
        </router-link>
        <router-link to="/discovery/songs" tag="div">
            歌单
        </router-link>
        <router-link to="/discovery/radio" tag="div">
            主播电台
        </router-link>
        <router-link to="/discovery/top" tag="div">
            排行榜
        </router-link>
        <router-link to="/discovery/singer" tag="div">
            歌手
        </router-link>
        <router-link to="/discovery/new-music" tag="div">
            最新歌曲
        </router-link>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss" scoped>
    .nva-list {
        display: flex;
        justify-content: center;
        height: 2rem;
        background-color: #fafafa;
        user-select: none;
        border-bottom: 1px solid #afb1b3;
        div {
            height: 2rem;
            margin: 0 1rem;
            line-height: 2rem;
        }
    }
    .router-link-exact-active {
        border-bottom: 2px solid green;
    }
</style>
