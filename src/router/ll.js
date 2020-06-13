import Vue from 'vue'
import VueRouter from "vue-router";
import discovery from '@/page/discovery';
import personality from '@/page/discovery/personality';
import songList from '@/page/discovery/song-list';
import radio from '@/page/discovery/radio'
import top from '@/page/discovery/top'
import singer from '@/page/discovery/singer'
import newMusic from '@/page/discovery/new-music'
import playlist from '@/page/playlist'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    base: '/music/',
    routes: [
        {
            path: '/discovery',
            component: discovery,
            redirect: '/discovery/personality',
            children: [
                {
                    path: 'personality',
                    component: personality
                },
                {
                    path: "songs",
                    component: songList
                },
                {
                    path: 'radio',
                    component: radio
                },
                {
                    path: 'top',
                    component: top
                },
                {
                    path: 'singer',
                    component: singer
                },
                {
                    path: 'new-music',
                    component: newMusic
                }
            ]
        },
        {
            path: '/playlist/:playlistID',
            component: playlist
        }
    ]
})
