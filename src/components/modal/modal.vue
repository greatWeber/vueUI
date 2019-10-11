<template>
<div class="vueUI-modal">
    <transition name="fade">
        <div class="vueUI-mask" v-show="showFlag"></div>
    </transition>
    <transition name="fade">
        <div class="vueUI-modal-wapper" v-show="showFlag">
            <h3 class="vueUI-modal-title">{{title}}</h3>
            <div class="vueUI-modal-content">
            <p class="vueUI-modal-text" v-if="type=='message'">{{value}}</p>
            <input type="text" v-model="inputValue" v-else-if="type=='input'" class="vueUI-modal-input" :placeholder="placeholder"/>
            </div>
            <div class="vueUI-modal-footer flex">
                <span class="vueUI-modal-cancel" @click="cancelHandler">{{cancelText}}</span>
                <span class="vueUI-modal-confirm" @click="confirmHandler">{{confirmText}}</span>
            </div>
        </div>
    </transition>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface Option {
    title?: String,
    value?: String,
    type?: String,
    cancelText?: String,
    confirmText?: String
}

@Component({name:'Modal'})
export default class Modal extends Vue {
    private title: String = '提示';
    private value: String = '';
    private inputValue: String|Number = '';
    private cancelText: String = '取消';
    private confirmText: String = '确定';
    private showFlag: Boolean = false;
    private type: String = 'message';
    private placeholder: String = '';
    private resolve: Function;
    private reject: Function;

    private cancelHandler():void {
        this.showFlag = false;
        this.inputValue = '';
        this.reject&&this.reject();
    }

    private confirmHandler():void {
        let data;
        if (this.type=='input'){
            data = {
                action: 'confirm',
                value: this.inputValue
            }
        }else{
            data = {
                action: 'confirm'
            }
        }
        this.showFlag = false ;
        this.resolve&&this.resolve(data);
        this.inputValue = '';
    }

    /**
     * 对外的message接口
     */
    public message(value?: string, title: string = '提示'):Promise<any>{
        this.value = value;
        this.title = title;
        this.type = 'message';
        this.showFlag = true;
        return new Promise((resolve,reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        })
    }

    public input(placeholder?: string, title: string = '提示'):Promise<any>{
        this.placeholder = placeholder;
        this.title = title;
        this.type = 'input';
        this.showFlag = true;
        return new Promise((resolve,reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        })
    }

    public dispose(option):Promise<any>{
        this.title = option.title || this.title;
        this.value = option.value || this.value;
        this.type = option.type || this.type;
        this.cancelText = option.cancelText || this.cancelText;
        this.confirmText = option.confirmText || this.confirmText;
        this.showFlag = true;
        return new Promise((resolve,reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        })
    }

}
</script>
    
<style lang="less" scoped>
</style>