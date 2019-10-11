<template>
<transition name="fade">
    <div class="vueUI-toast" v-show="showFlag">
        <p class="vueUI-toast-content flex flex-colmun">
            <span class="icon icon-success" v-if="type=='success'"></span>
            <span class="icon icon-error" v-else-if="type=='error'"></span>
            <span class="icon icon-information" v-else-if="type=='info'"></span>
            <span class="vueUI-toast-text">{{title}}</span>
        </p>
    </div>
</transition>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {
    private type: String = ''; // 提示类型：success, error, info, text
    private title: String = '';
    private showFlag: Boolean = false ;

    public success(title?: string, time: number = 2000): Promise<any>{
        this.title = title;
        this.type = 'success';
        this.showFlag = true;
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.showFlag = false ;
                resolve();
            },time)
        })
    }

    public error(title?: string, time: number = 2000): Promise<any>{
        this.title = title;
        this.type = 'error';
        this.showFlag = true;
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.showFlag = false ;
                resolve();
            },time)
        })
    }

    public info(title?: string, time: number = 2000): Promise<any>{
        this.title = title;
        this.type = 'info';
        this.showFlag = true;
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.showFlag = false ;
                resolve();
            },time)
        })
    }

    public text(title?: string, time: number = 2000): Promise<any>{
        this.title = title;
        this.type = '';
        this.showFlag = true;
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.showFlag = false ;
                resolve();
            },time)
        })
    }
}
</script>
    
<style lang="less" scoped>
</style>