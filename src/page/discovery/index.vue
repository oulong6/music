<template>
    <div class="discovery">
        <nva-a/>
        <keep-alive :exclude="['playlist']">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import nva from '@/page/discovery/nva'
    export default {
        name: "",
        data(){
           return {

           }
        },
        mounted(){

        },
        components: {
            'nva-a':nva
        },
        activated(){
            console.log('d')
        }

    }
</script>

<style lang="scss" scoped>
    .discovery {
        position: relative;
    }
</style>
