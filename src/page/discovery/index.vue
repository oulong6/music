<template>
    <div class="discovery">
        <nva-a/>
        <router-view></router-view>
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
        }

    }
</script>

<style lang="scss" scoped>
    .discovery {
        position: relative;
    }
</style>
