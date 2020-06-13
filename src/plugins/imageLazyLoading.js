var scrollY = document.documentElement.clientHeight
const instance = {
    install(vue){
        vue.directive('lazy-loading',{
            bind(){
            },
            inserted(el){
                if (el.getBoundingClientRect().top <= scrollY){
                    if (el.dataset.src !== undefined){
                        el.src =el.dataset.src
                        delete  el.dataset.src
                    }
                }
            }

       })
        vue.directive('lazy-loading-parent',{
            bind(el){
                function x() {
                    let s = false
                    setTimeout(()=>{
                        if (s)  return
                        s = true
                        for (let i = 0;i<imgs.length;i++){
                            if (imgs[i].getBoundingClientRect().top <= scrollY){
                                if (imgs[i].dataset.src !== undefined){
                                    imgs[i].src = imgs[i].dataset.src
                                    delete  imgs[i].dataset.src
                                }
                            }else {
                                break;
                            }
                        }
                        s = false
                    },100)
                }
                var imgs = el.getElementsByTagName('img')

                el.addEventListener('scroll',x)

            },
            unbind(){

            },
            inserted(el){
                el.scroll({top: 10})
            }
        })

    }
}
export default instance
