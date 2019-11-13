<template>
<section class="vueUI-cell-g">
    <h3 class="title">{{title}}</h3>
    <vu-cell 
        v-for="(item,i) in list"
        :key="i"
        :title="item.title"
        :to="item.to"
        :arrow="item.arrow"
        :value="item.value"
    ></vu-cell>

</section>
</template>
    
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import cell from '../cell/index.vue';
@Component({
    name:'cellG',
    components:{
        'vu-cell':cell
    }
})
export default class cellG extends Vue {
    @Prop(String) readonly title;
    @Prop(Array) readonly list;
}
</script>
    
<style lang="less" scoped>
.vueUI-cell-g {
    width: 100%;

    .title {
        font-size: 0.32rem;
        line-height: 0.6rem;
        color: #999;
        background: #f5f5f5;
        text-indent: 0.2rem;
    }
}
</style>