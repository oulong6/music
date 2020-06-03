<template>
    <div id="app">
        <header-a/>
        <div class="main-a">
            <sidebar/>
            <div class="right-a">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '@/components/header';
    import sidebar from '@/components/sidebar';
    export default {
        name: 'App',
        components: {
            'header-a': header,
             sidebar,
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
