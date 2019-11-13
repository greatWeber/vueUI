<template>
<div>
    <!-- <vu-cell 
        v-for="(item,i) in routes"
        :key="i"
        :title="item.name"
        :to="{name:item.name}"
        :arrow="true"
        :value="item.meta.title"
    ></vu-cell> -->
    <vu-cell-g
        v-for="(item,i) in routes"
        :key="i"
        :title="item.title"
        :list="item.list">

    </vu-cell-g>
</div>
</template>
    
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
@Component({
    created(){
        // this.routes = this.$router.options.routes;
        let routes = {};
        this.$router.options.routes.forEach(route=>{
            if(!route.meta.groupEn) return;
            if(!routes[route.meta.groupEn]){
                routes[route.meta.groupEn] = {
                    title:route.meta.groupZh,
                    list:[]
                }
            }
            let obj = {
                title: route.name,
                to: {name:route.name},
                arrow: true,
                value: route.meta.title
            };
            routes[route.meta.groupEn].list.push(obj);
        });
        this.routes = routes;
        console.log(routes);
        // this.routes.shift();
    }
})
export default class Index extends Vue {
    private routes: Array<Object> = [];
}
</script>
    
<style lang="less" scoped>

</style>