<template>
    <div class="rankList" >
        <img :src="close" alt="" class="close" @click="closeRank">
        <div class="listBg">
            <img :src="rankList" alt="" class="bg">
            <div class="list">
                <div class="cell space-between" v-for="(item,index) in rank" :key="index" :class="{'winner':index<3}">
                    <div>
                        <img :src="index==0?gold:(index==1?silver:copper)" alt="" v-if="index<3" class="medal">
                        <p v-else class="index">{{index+1}}</p>
                    </div>
                    <div class="name">{{item.name}}</div>
                    <div>{{item.num}}</div>
                </div>
            </div>
        </div>
        <div class="myRank">
            <p class="tile">您的排名</p>
            <div class="cell space-between">
                <p>1</p>
                <p>5457687i</p>
                <p>67</p>
            </div>
            <!-- <div class="btn">
                <img :src="lookDetail" alt="">
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rankList:require(`@/assets/images/rankList.png`),
            close:require(`@/assets/images/close.png`),
            gold:require(`@/assets/images/gold.png`),
            silver:require(`@/assets/images/silver.png`),
            copper:require(`@/assets/images/copper.png`),
            myRank:require(`@/assets/images/myRank.png`),
            lookDetail:require(`@/assets/images/lookDetail.png`),
            rank:[
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                },
                {
                    name:'fdjjhfrnj574',
                    num:99
                }
            ]
        }
    },
    methods: {
        closeRank(){
            this.$emit('closeRank')
        }
    },
}
</script>
<style lang="scss" scoped>
.rankList{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow-y: scroll;
    background-color: rgba($color: #000000, $alpha: 0.8);
    .close{
        width: .5rem;
        height: .5rem;
        position: absolute;
        right: .17rem;
        top: .3rem;
    }
    .listBg{
        width: 7rem;
        height: auto;
        margin: .5rem auto 0;
        position: relative;
        .bg{
            width: 100%;
            height: auto;
        }
        .list{
            width: 6.3rem;
            height: 6.1rem;
            position: absolute;
            // background-color: pink;
            top: 2.5rem;
            left: 50%;
            margin-left: -3.15rem;
            .cell{
                width: 6.28;
                height: .52rem;
                padding: 0 .8rem;
                background-color: #f8f8f8;
                margin-bottom: .1rem;
                color: #333;
                font-size: .26rem;
                box-shadow: .02rem .03rem  .02rem  0 #35e6f2;
                .medal{
                    width: .32rem;
                    height: .42rem;
                }
                .index{
                    width: .3rem;
                    // background-color: greenyellow;
                    text-align: center;
                    font-weight: 500;
                }
                .name{
                    width: 1.6rem;
                    text-align: center;
                    // background-color: greenyellow;
                }
            }
            .winner{
                color: #ff4577;
            }
        }
    }
    .myRank{
        width: 7rem;
        height: 2.25rem;
        background-color: #4f3eab;
        box-shadow: inset 0 .02rem .04rem .01rem 
            #91fffe;
        border-radius: .2rem;
        margin: .1rem auto 0;
        position: relative;
        .tile{
            text-align: center;
            font-size: .28rem;
            color: #fff;
            line-height: .8rem;
        }
        .cell{
            width: 6.33rem;
            height: .52rem;
            margin: 0 auto;
            color: #fff;
            font-size: .28rem;
            padding: 0 .6rem;
            background-color: #6554c4;
        }
        .btn{
            width: 2rem;
            height: .56rem;
            margin: .2rem auto 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>