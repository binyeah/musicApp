<template>
    <div class="myPrize">
        <img :src="myPrizeBg" alt="" class="myPrizeBg">
        <img :src="noPrize" alt="" class="noPrize" v-if="noData">
        <div class="content" v-else>
            <div class="cell" v-for="(item,index) in prizeList"  :key="index">
                <p class="time">{{item.time}}</p>
                <div class="space-between">
                    <img :src="item.img" alt="">
                    <div class="right flex-column">
                        <p class="name overFlow-2">奖品:{{item.name}}</p>
                        <div>
                            <p class="num">数量:{{item.num}}</p>
                            <p class="price">价值:{{item.price}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myPrizeBg:require(`@/assets/images/myPrizeBg.png`),
            noPrize:require(`@/assets/images/noPrize.png`),
            noData:false,
            prizeList:[
                {
                    time:'2020-09-28  16:33',
                    img:require(`@/assets/images/prizeBack.png`),
                    name:'GoPro HERO8 Black 4K运动相机运动相机呵呵就会觉得很费劲的回顾和北京举办',
                    num:1,
                    price:1999,
                },
                {
                    time:'2020-09-28  16:33',
                    img:require(`@/assets/images/prizeBack.png`),
                    name:'GoPro HERO8 Black 4K运动相机运动相机呵呵就会觉得很费劲的回顾和北京举办',
                    num:1,
                    price:1999,
                },
                {
                    time:'2020-09-28  16:33',
                    img:require(`@/assets/images/prizeBack.png`),
                    name:'GoPro HERO8 Black 4K运动相机运动相机呵呵就会觉得很费劲的回顾和北京举办',
                    num:1,
                    price:1999,
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.myPrize{
    width: 100%;
    height: 100vh;
    padding: .3rem;
    background-color: #8a1ac6;
    position: relative;
    .myPrizeBg{
        width: 100%;
        height: 100%;
    }
    .noPrize{
        width: 2.8rem;
        height: 2.4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1.4rem;
        margin-top: -1.2rem;
    }
    .content{
        width: 6.4rem;
        height: calc(100vh - 2.5rem);
        position: absolute;
        top: 2rem;
        left: 50%;
        margin-left: -3.2rem;
        // background-color: #fff;
        overflow-y: scroll;
        .cell{
            width: 100%;
            height: 2.3rem;
            background-color: rgba($color: #fff, $alpha: 0.17);
            margin-bottom: .15rem;
            border-radius: .1rem;
            padding: .2rem;
            font-size: .24rem;
            .time{
                color: #d17fff;
            }
            .space-between{
                width: 100%;
                height: 1.5rem;
                margin-top: .1rem;
                // background-color: greenyellow;
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: .1rem;
                }
                .right{
                    width: calc(100% - 1.7rem);
                    height: 1.5rem;
                    // background-color: blue;
                    .name,.num{
                        color:#fff;
                    }
                    .price{
                        color: #ffee30;
                    }
                }
            }
        }
    }
}
</style>