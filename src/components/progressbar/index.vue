<template>
    <div class="progress-bar" @click="handleClick">
        <div class="progress" :style="{width: width}" :class="{animation: trigger}">

        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
          return {
              width: '0',
              trigger: false
          }
        },
        methods: {
            handleClick(event){
                this.trigger = false;
                this.width = event.clientX / parseInt(window.getComputedStyle(event.target).width) * 100 + '%';
                this.trigger = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress-bar {
        display: flex;
        align-items: center;
        height: 1rem;
        background-color: rgba(0,0,0,.4);
        .progress {
            height: .2rem;
            background-color: red;
        }
        .animation {
            animation: progress 120s forwards linear;
        }
    }
    @keyframes progress {
        0% {
        }
        100% {
            width: 100%;
        }
    }
</style>
