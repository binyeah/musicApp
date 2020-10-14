<template>
    <div class="loading-page">
        <img :src="loadBg" alt="" class="loadBg">
        <div class="content">
            <img :src="loading" alt="" class="loading">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            load:require(`@/assets/images/loading.gif`),
            loadBg:require(`@/assets/images/loadBg.png`)
        }
    },
    created() {
        var now =  (new Date()).getTime()
        this.loading = `${this.load}?${now}`
        setTimeout(() => {
            // this.$toast({
            //     message: '加载完成',
            // });
            this.$router.replace('/activity')
        }, 3000);
    },
}
</script>
<style lang="scss" scoped>
.loading-page{
    width: 100%;
    height: 100vh;
    background-color: #8d1cb0;
    position: relative;
    overflow: hidden;
    .loadBg{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .content{
        width: 6rem;
        height: auto;
        position: absolute;
        left: 50%;
        margin-left: -3rem;
        top: 60%;
        .loading{
            width: 100%;
            height: auto;
        }
    }
    
}
</style>