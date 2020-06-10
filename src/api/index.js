import axios from 'axios'
import {
    bannerSwiper,
    personalized,
    privatecontent,
    getPlaylist,
    getSongDetail,
    getSongUrl
} from './config'
axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://120.77.242.209'

const install = axios.create({
    baseURL: 'https://api.mtnhao.com',
    withCredentials: false
})
install.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})
export default {
    bannerSwiperFn () {
        return install.get(bannerSwiper)
    },
    personalizedFn(){
        return install.get(personalized)
    },
    privatecontent(){
        return install.get(privatecontent)
    },
    getPlaylist(id){
        return install.get(getPlaylist+id)
    },
    getSongDetail(id){
        return install.get(getSongDetail + id)
    },
    getSongUrl(id){
        return install.get(getSongUrl+id)
    }
}
