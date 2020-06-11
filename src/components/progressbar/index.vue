<template>
    <div class="progress-bar" @click="handleClick" tabindex="-1" @focus="handleFocus">
        <div class="progress" :style="{ transform: `scaleX(${scaleX})`}">

        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            time: {
                type: Number,
                require: true
            },
            playState: {
                type: Boolean
            }
        },
        data(){
          return {
              width: '0',
              trigger: false,
              scaleX: 0,
              timer: null,
              scale: 0
          }
        },

        computed: {

        },
        methods: {
            handleFocus(event){
                this.width = parseInt(window.getComputedStyle(event.target).width);
            },
            handleClick(event){
                clearInterval(this.timer)
                this.scaleX = event.clientX/parseInt(window.getComputedStyle(event.target).width);
                this.timer = setInterval(()=>{
                    if (this.scaleX>= 1) clearInterval(this.timer)
                    this.scaleX = this.scaleX + this.scale
                },500)
                this.$emit('currentTime',parseInt((this.time * this.scaleX) / 1000))
            }
        },
        watch: {
            'playState': function (state) {
                if (state === false){
                    clearInterval(this.timer)
                    console.log(state,this.timer)
                }else {
                    clearInterval(this.timer)
                    this.scale = 1 / (this.time/1000) / 2;
                    this.timer = setInterval(()=>{
                        if (this.scaleX>= 1) clearInterval(this.timer)
                        this.scaleX = this.scaleX + this.scale
                    },500)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress-bar {
        display: flex;
        align-items: center;
        height: 1rem;
        outline: none;
        .progress {
            flex: 1;
            position: relative;
            height: .2rem;
            background-color: rgb(237, 101, 90);
            transform: scaleX(0.1);
            transform-origin: 0 100%;
        }
    }
</style>
