// rem
const designWidth: number = 750; //设计稿
const maxWidth: number = 750; //最大宽度

const doc: Document = document;
const docEl: Element = document.documentElement;
const style: Element = document.createElement('style');
const head: Element = document.head;

const refreshRem = ():void =>{
    let width: number = docEl.getBoundingClientRect().width;
    width>maxWidth && (width=maxWidth);
    let rem = width /  designWidth *100; //设计稿 rem: px = 1:100
    style.innerHTML = `html {font-size: ${rem}px;}`;

}

const remDesign = ():void=>{
   

    head.appendChild(style);

    refreshRem();

    window.addEventListener('resize',()=>{
        setTimeout(refreshRem, 300);
    },false);

    // 浏览器后退重新计算
    window.addEventListener('pageshow',()=>{
        setTimeout(refreshRem,300);
    },false);

    if(doc.readyState === 'complete'){
        doc.body.style.fontSize = '16px';
    }else{
        doc.addEventListener('DOMContentLoaded',()=>{
            doc.body.style.fontSize = '16px';
        },false)
    }
}


export {
    remDesign
}