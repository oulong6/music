<template>
    <div class="menu">
        <div class="menu-warp">
            <div class="menu-title">{{menuTitle}}</div>
            <ul class="menu-list">
                <li  class="menu-item" v-for="(item,index) in menus" :key="index" @click="handleClick(item.url)">
                    <i class="menu-icon" :class="item.icon"></i>
                    <span class="menu-name">{{item.menuName}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            menus: {
                type: Array,
                default: function () {
                    return []
                }
            },
            menuTitle: {
                type: String,
                require: true
            }
        },
        mounted() {
        },
        methods:{
            handleClick(url){
                url!==undefined? this.$router.push({path: url}) :''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        padding: 1rem 1rem 0rem;
        color: #6e6e6e;
        user-select: none;
        .menu-warp {
            .menu-title {

            }
            .menu-list {
                padding-left: 1rem;
                .menu-item {
                    margin: 1rem 0;
                    list-style: none;
                    .menu-icon {
                        margin-right: .4rem;
                    }
                }
            }
        }
    }
</style>
