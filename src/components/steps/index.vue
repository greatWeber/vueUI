<template>
<section :class="['steps-wrapper', dir==='horizontal'?'flex':'']">
    <div :class="[dir==='horizontal'?'steps-item-horizontal':'steps-item-vertical',status>=i?'steps-act':'',status-1==i?'line-act':'']" v-for="(item,i) in list" :key="i">
        <span class="dot"></span>
        <p class="title">{{item.title}}</p>
        <p class="info">{{item.info}}</p>
    </div>
</section>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name:'Steps'
})
export default class Steps extends Vue {
    @Prop(Array) readonly list;
    @Prop(Number) readonly status;
    @Prop({type:String,default:'horizontal'}) readonly dir; // 方向 vertical, horizontal
}
</script>
    
<style lang="less" scoped>
.steps-wrapper {
    padding: 0.2rem;

    .steps-item-horizontal {
        
        position: relative;
        color: #666;
        flex: 1;
        padding-top: 0.3rem;
        text-align: center;


        &:last-child {
            &::after{
                background: transparent;
            }
        }


        &::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 0.1rem;
            width: 100%;
            height: 5px;
            background: #ccc;
        }
    }

    .steps-item-vertical {
        position: relative;
        color: #666;
        min-height: 2rem;
        padding-left: 0.5rem;

        .dot {
            top: -0.15rem;
            left: -0.1rem;
            transform: translate(0,0.2rem)
        }

        &:last-child {
            &::after{
                background: transparent;
            }
        }


        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0.2rem;
            width: 5px;
            height: 100%;
            background: #ccc;
        }
    }

    .steps-act {
        color: #539BED;
        .dot {
            background: #539BED;
        }
    }

    .line-act {
        &::after {
            background: #539BED;
        }
    }

    .dot {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        z-index: 3;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background: #ccc;
    }

    .title {
        font-size: 14px;
    }

    .info {
        font-size: 12px;
    }
}
</style>