<template>
    <div id="app">
        <header-a/>
        <div class="main-a">
            <sidebar/>
            <div class="right-a">
                    <router-view></router-view>
            </div>
        </div>
        <mini-player></mini-player>
    </div>
</template>

<script>
    import header from '@/components/header';
    import sidebar from '@/components/sidebar';
    import miniPlayer from '@/components/miniPlayer'

    export default {
        name: 'App',
        components: {
            'header-a': header,
             sidebar,
            miniPlayer
        },
        beforeDestroy(){
            console.log('app destroy')
        },
        computed: {
            singId(){
                return this.$store.getters.getSongId
            }
        }
    }
</script>

<style lang="scss">

    #app {
        height: 100%;
        min-width: 60vw;
    }
    html {
        font-size: 16px;
    }
    body {
        margin: 0;

    }
    .main-a {
        position: absolute;
        top: 3.4rem;
        left: 0;
        right: 0;
        bottom: 0;
    }
  .main-a .right-a {
     position: absolute;
     top: 0rem;
     left: 15rem;
     right: 0;
     bottom: 0;
     min-width: 1060px;
     background-color: #fafafa;
     overflow-y: auto;
     user-select: none;
     &::-webkit-scrollbar-track {
         background-color: #d5d6d6;
         border-radius: 2px;
     }

     &::-webkit-scrollbar-thumb {
         background-color: #838383;
         border-radius: 10px;
     }
     &::-webkit-scrollbar {
         width: .2rem;
         height: .2rem;
         background-color: #f5f5f5;
     }
 }
</style>
