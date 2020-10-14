<template>
    <div class="page todayPrize center" @touchmove.prevent v-if="showTodayPrize">
        <div class="content">
            <div class="card">
                <img :src="todayPrize" alt="">
                <div class="list">
                    <div class="item flex" v-for="(item,index) in cardList" :key="index">
                        <div>{{item.name}}</div>
                        <p>+{{item.num}}</p>
                    </div>
                </div>
                
            </div>
            <div class="btn">
                <img :src="returnGame" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showTodayPrize:false,
            todayPrize:require(`@/assets/images/todayPrize.png`),
            returnGame:require(`@/assets/images/returnGame.png`),
            cardList:[
                {
                    name:'助力牌',
                    num:1
                },
                {
                    name:'助力牌',
                    num:2
                },
                // {
                //     name:'助力牌',
                //     num:2
                // },
                // {
                //     name:"'易'手好牌",
                //     num:2
                // },
                // {
                //     name:'助力牌',
                //     num:2
                // }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 997;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.9);
    .content{
        
        .card{
            width: 4rem;
            height: auto;
            position: relative;
            img{
                width: 100%;
                height: auto;
            }
            .list{
                width: 100%;
                height: auto;
                position: absolute;
                top: 2.3rem;
                // background-color: greenyellow;
                .item{
                    width: auto;
                    // position: absolute;
                    div{
                        background-image: linear-gradient(123deg,   #ed5995 0%,   #be3eb4 50%,   #9025d0 100%), 
                        linear-gradient(   #c78c0c,    #c78c0c);
                        background-blend-mode: normal,  normal;
                        padding: 0 .2rem;
                        color: #fff;
                        border: solid .05rem #ffffff;
                    }
                    p{
                        // color: #ff4577;
                        margin-top: -.25rem;
                        font-weight: bold;
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                        // background-color:#fff;
                        // text-shadow:-0.03rem 0 #fff,0 0.03rem #fff,0.03rem 0 #fff,0 -0.03rem #fff;
                        color: transparent;
                        -webkit-text-fill-color: #ff4577;/*文字的填充色*/
                        -webkit-text-stroke: .03rem #fff;
                    }
                }
                //1
                .item:only-child{
                    margin-top: .5rem;
                    margin-left: 1rem;
                    height: .52rem;
                    div{
                        border-radius: .26rem;
                        font-size: .32rem;
                    }
                    p{
                        font-size: .52rem;
                    }
                }
                //2
                .item:first-child:nth-last-child(2){
                    margin-top: .4rem;
                    margin-left: 1.2rem;
                    height: .5rem;
                    div{
                        border-radius: .25rem;
                        font-size: .3rem;
                    }
                    p{
                        font-size: .5rem;
                    }
                }
                .item:first-child:nth-last-child(2) + .item{
                    margin-top: .5rem;
                    margin-left: 1.2rem;
                    height: .5rem;
                    div{
                        border-radius: .25rem;
                        font-size: .3rem;
                    }
                    p{
                        font-size: .5rem;
                    }
                }
                /* 3个 */
                .item:first-child:nth-last-child(3){
                    margin-top: .1rem;
                    margin-left: 1.3rem;
                    height: .48rem;
                    div{
                        border-radius: .24rem;
                        font-size: .28rem;
                    }
                    p{
                        font-size: .48rem;
                    }
                }
                .item:nth-child(2):nth-last-child(2){
                    margin-top: .3rem;
                    margin-left: 1.3rem;
                    height: .48rem;
                    div{
                        border-radius: .24rem;
                        font-size: .28rem;
                    }
                    p{
                        font-size: .48rem;
                    }
                }
                .item:nth-child(3):nth-last-child(1){
                    margin-top: .3rem;
                    margin-left: 1.3rem;
                    height: .48rem;
                    div{
                        border-radius: .24rem;
                        font-size: .28rem;
                    }
                    p{
                        font-size: .48rem;
                    }
                }
                /* 4个 */
                .item:first-child:nth-last-child(4){
                    margin-top: .3rem;
                    margin-left: .5rem;
                    height: .4rem;
                    div{
                        border-radius: .2rem;
                        font-size: .25rem;
                    }
                    p{
                        font-size: .39rem;
                    }
                }
                .item:nth-child(2):nth-last-child(3){
                    top: .3rem;
                    right: .3rem;
                    position: absolute;
                    height: .4rem;
                    div{
                        border-radius: .2rem;
                        font-size: .25rem;
                    }
                    p{
                        font-size: .39rem;
                    }
                }
                .item:nth-child(3):nth-last-child(2){
                    margin-top: .6rem;
                    margin-left: .5rem;
                    height: .4rem;
                    div{
                        border-radius: .2rem;
                        font-size: .25rem;
                    }
                    p{
                        font-size: .39rem;
                    }
                }
                .item:nth-child(4):nth-last-child(1){
                    top: 1.3rem;
                    right: .3rem;
                    position: absolute;
                    height: .4rem;
                    div{
                        border-radius: .2rem;
                        font-size: .25rem;
                    }
                    p{
                        font-size: .39rem;
                    }
                }
                /* 5个 */
                .item:first-child:nth-last-child(5){
                    margin-top: .1rem;
                    margin-left: .3rem;
                    height: .38rem;
                    div{
                        border-radius: .19rem;
                        font-size: .23rem;
                    }
                    p{
                        font-size: .37rem;
                    }
                }
                .item:nth-child(2):nth-last-child(4){
                    top: .1rem;
                    right: .2rem;
                    position: absolute;
                    height: .38rem;
                    div{
                        border-radius: .19rem;
                        font-size: .23rem;
                    }
                    p{
                        font-size: .37rem;
                    }
                }
                .item:nth-child(3):nth-last-child(3){
                    margin-top: .4rem;
                    margin-left: .5rem;
                    height: .38rem;
                    div{
                        border-radius: .19rem;
                        font-size: .23rem;
                    }
                    p{
                        font-size: .37rem;
                    }
                }
                .item:nth-child(4):nth-last-child(2){
                    top: .9rem;
                    right: .1rem;
                    position: absolute;
                    height: .38rem;
                    div{
                        border-radius: .19rem;
                        font-size: .23rem;
                    }
                    p{
                        font-size: .37rem;
                    }
                }
                .item:nth-child(5):nth-last-child(1){
                    margin-top: .4rem;
                    margin-left: 1rem;
                    height: .38rem;
                    div{
                        border-radius: .19rem;
                        font-size: .23rem;
                    }
                    p{
                        font-size: .37rem;
                    }
                }
            }
            
        }
        .btn{
            width: 2.3rem;
            height: .75rem;
            margin: .7rem auto 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>