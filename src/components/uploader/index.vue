<template>
<div class="vueUI-uploader">
    <label class="vueUI-uploader-label">
        <input class="vueUI-uploader-input" type="file" :value="fileValue" :accept="'image/'+accept" @change="changeHandler">
        <span class="icon icon-increase"></span>
    </label>
    <div class="vueUI-uploader-img" v-for="(img,i) in imgList" :key="i">
        <img :src="img" alt="" class="image" @click="showImageHandler(img)">
        <span class="close icon icon-cancelwhite" @click="delHandler(i)"></span>
    </div>
    <!-- 大图 -->
    <transition name="fade">
        <div class="vueUI-show-img flex align-center" v-show="showFlag" @click="showFlag=false;">
            <img :src="showImg" alt="">
        </div>
    </transition>
</div>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import emitter from '@/mixins/emit';

@Component({
    name:'Uploader',
     mixins:[emitter],
})
export default class Uploader extends Vue {
    @Prop(Array) readonly value;
    @Prop({type:String,default:'*'}) readonly accept;
    @Prop({type:Number,default:5}) readonly limit;

    private imgList: Array<string> = [];
    private fileValue: any = '';
    private showFlag: boolean = false;
    private showImg: string = '';

    @Watch('value')
    valueHandler(){
        this.imgList = this.value;
        (this as any).dispatch('FormItem','vueUI.form.change',[this.value]);
    }

    /**
     * 监听文件上传
     */
    private changeHandler(data){
        // console.log(data);
        let files = data.target.files;
        files = Array.from(files);
        console.log(files);
        let flag = false;
        files.forEach(file=>{
            if(file.size-this.limit*1024*1024>0){  // 单位 m
                flag = true;
            }
        });

        if(flag){
            (this as any).$toast.error('上传的文件超过最大限制');
            return;
        }

        files.forEach(file=>{
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function(){
                let base64 = fileReader.result;
                file.base64 = base64;
            }
        });
        setTimeout(()=>{
            this.$emit('uploaderHandler',files);
            this.fileValue = '';  // 解决多次选择同一张图片不触发change的bug
        },500)
    }

    /**
     * 删除某个文件
     */
    private delHandler(i){
        this.imgList.splice(i,1);
        this.$emit('input',this.imgList);
    }

    /**
     * 显示图片的大图
     */
    private showImageHandler(img){
        this.showImg = img;
        this.showFlag = true;
    }

}
</script>
    
<style lang="less" scoped>
.vueUI-uploader {

}
.vueUI-uploader-label {
    display: inline-block;
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    border: 1px solid #ccc;
    margin: 0.2rem;
    margin-right: 0;

    .icon {
        display: block;
        font-size: 1rem;
        text-align: center;
        line-height: 2rem;
        color: #666
    }
}

.vueUI-uploader-input {
    display: none;
}

.vueUI-uploader-img {
    width: 2rem;
    height: 2rem;
    margin: 0.2rem;
    // margin-left: 0;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.7rem;
        color: #999;
    }
}

.vueUI-show-img {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 999;
    background: rgba(0,0,0,0.8);

    img {
        width: 100%;
        height: auto;
    }
}
</style>