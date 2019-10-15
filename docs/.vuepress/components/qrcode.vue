<template>
<div>
    <a class="example-href" :href="href">{{href}}</a>
    <div class="qrcode" ref="qrcode"></div>

</div>
</template>

<script>
var qrcode = require('../public/qrcode.js');
console.log(qrcode)
export default {
    props:['href'],
    mounted(){
        var qrnode = new qrcode.AraleQRCode({
            text:this.href,
            imageSize : 80,
            image: 'https://avatars0.githubusercontent.com/u/26887948?s=400&u=f12ba047f5b64d30fbbfedd18ce43540d532f29b&v=4'
        });
        this.$refs.qrcode.appendChild(qrnode);
    }
}
</script>

<style>
.example-href {
    line-height: 3;
}
</style>