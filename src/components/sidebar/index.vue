<template>
    <div class="sidebar">
        <menu-a :menus="menus1" menu-title="推荐"/>
        <menu-a :menus="menus2" menu-title="我的音乐"/>
    </div>
</template>

<script>
    import menu from '@/components/menu'
    export default {
        name: "",
        data(){
          return {
              menus1: [
                  {icon: 'iconfont icon-music',menuName: '发现音乐',url: '/discovery'},
                  {icon: 'iconfont icon-weibiaoti--1',menuName: '私人FM'},
                  {icon: 'iconfont icon-liveshipinzhibo',menuName: 'LOOK直播'},
                  {icon: 'iconfont icon-video',menuName: '视频'},
                  {icon: 'iconfont icon-friend',menuName: '朋友'},
              ],
              menus2: [
                  {icon: 'iconfont icon-music',menuName: '本地音乐'},
                  {icon: 'iconfont icon-xiazai',menuName: '下载'},
                  {icon: 'iconfont icon-fenxiang',menuName: '分享'},
              ]
          }
        },
        components: {
            'menu-a': menu
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 15rem;
        background-color: #f5f5f7;
    }
</style>
