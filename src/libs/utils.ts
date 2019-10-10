const utils = {
    setCss: (target:any,styles:object)=>{
        // 设置样式
        for(let attr in styles){
            target.style[attr] = styles[attr];
        }
    },

    ripple: ()=>{
        const animationend = (event)=>{
            (event.target as any).classList.remove('vueUI-ripple-active');
        }
        document.addEventListener('touchstart',(e)=>{
            console.log((e.target as any).classList);
            if ((e.target as any).classList.contains('vueUI-ripple')){
                (e.target as any).classList.add('vueUI-ripple-active');
                e.target.removeEventListener('animationend',animationend);
                e.target.addEventListener('animationend',animationend,false );
            }
        },false )
    }
}

export default utils;