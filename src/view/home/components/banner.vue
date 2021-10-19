<template>
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in dataList" :key="index">
                <img :src="image.pic" class="img"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    props:{
        dataList:{
            type:Array,
            default:()=>[]
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
.banner{
    // margin-top: 1.1rem;
    width: 100%;
    height: 2.3rem;
    .my-swipe{
        width: 100%;
        height: 100%;
        .van-swipe-item{
            width: 100%;
            height: 100%;
            padding: 0 .2rem;
            .img{
                width: 100%;
                height: 100%;
                border-radius: .1rem;
                object-fit: cover;
            }
        }
        
    }
    // background-color: pink;
}
</style>