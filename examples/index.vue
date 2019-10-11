<template>
<div>
    <vueUI-cell 
        v-for="(item,i) in routes"
        :key="i"
        :title="item.name"
        :to="{name:item.name}"
        :arrow="true"
        :value="item.meta.title"
    ></vueUI-cell>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component({
    created(){
        console.log(this.$router.options.routes);
        this.routes = this.$router.options.routes;
        // this.routes.shift();
    }
})
export default class Index extends Vue {
    private routes: Array<Object> = [];
}
</script>
    
<style lang="less" scoped>

</style>