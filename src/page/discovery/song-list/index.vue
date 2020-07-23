<template>
    <div class="song-list">
        <div class="song-list-btn">华语</div>
        <div class="labels-wrap">
           <div class="title">热门标签:</div>
           <div class="labels">
               <div ref="tag" class="label" v-for="tag of tags" :key="tag.id" @click="getSongsByTag(tag.name,$event)">{{tag.name}}</div>
           </div>
        </div>
        <song-list :songs="playlists"></song-list>
    </div>
</template>

<script>
    import songList from '@/components/song-list';
    export default {
        name: "",
        data(){
            return {
                tags: [],
                playlists: [],
                currentTag: '华语'
            }
        },
        mounted(){
          this.$api.getPlaylistTag().then(data=>{
            this.tags = data.tags;
          })
          this.getPlayList(50,0)
        },
        components: {
            songList
        },
        methods: {
            //limit
            getPlayList(limit,offset){
                let query = `limit=${limit}&offset=${offset}&cat=${this.currentTag}`
                this.$api.getPlayList(query).then(data=>{
                    this.playlists = data.playlists
                })
            },
            getSongsByTag(tag,$event){
                this.currentTag = tag;
                this.getPlayList(50,0);
                this.$refs.tag.forEach(tag=>{
                    tag.classList.remove('active')
                })
                $event.target.classList.add('active')

            }
        }
    }
</script>

<style lang="scss" scoped>
    .song-list {
        .labels-wrap {
            display: flex;
            .labels {
                display: flex;
                .label {
                    padding: 0 1rem;
                    border-right: 1px solid #989696;
                }
                .label:last-child {
                    border-right: none;
                }
                .active {
                    color: red;
                }
            }
        }
    }
</style>
