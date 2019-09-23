const utils = {
    setCss: (target:any,styles:object)=>{
        // 设置样式
        for(let attr in styles){
            target.style[attr] = styles[attr];
        }
    }
}

export default utils;