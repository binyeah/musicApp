<template>
    <div class="activity">
        <img :src="activityBg" alt="" class="activityBg">
        <div class="content">
            <div class="nav space-between">
                <div v-for="(item,index) in navList" :key="index" class="navItem" @click="goTo(item.path)">
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div class="card">
                <div class="centers">
                     <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="(item,index) in currentCards" :key="index" >
                            <div  class="currentCard flip-container">
                                <div class="flipper" :class="{'flip':item.flip}" @click="reflip(item)">
                                    <div class="front">
                                        <img :src="currentCard" alt="">
                                    </div>
                                    <div class="back">
                                        <img :src="prizeBack" alt="">
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="btn">
                <img :src="currentBtn" alt="" @click="handle">
            </div>
            <div class="cardList">
                <div class="centers">
                    <swiper class="swiper" :options="swiperOptions" ref="swiper">
                        <swiper-slide v-for="(item,index) in allCards" :key="index" >
                            <div  class="item" :class="{'current':isCurrent == index}" @click="choose(item,index)">
                                <span class="num" v-if="item.num>1">{{item.num}}</span>
                                <img :src="item.img" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <rank-list v-if="showRank" @closeRank='closeRank'/>
        <task v-if="showTask" @closeTask='closeTask'/>
         <today-prize/>
         <outline-prize/>
         <help-success/>
         <reback-all v-if="showRebackAll" @closeAllPrizeDialog="closeAllPrizeDialog"/>
        <div class="shareGuide" v-if="showShare" @click="showShare = false">
            <img :src="shareGuide" alt="">
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import rankList from './components/rankList'
import task from './components/task'
import todayPrize from './components/todayPrize'
import outlinePrize from './components/outlinePrize'
import helpSuccess from './components/helpSuccess'
import rebackAll from './components/rebackAll'
export default {
    components: {
      Swiper,
      SwiperSlide,
      rankList,
      task,
      todayPrize,
      outlinePrize,
      helpSuccess,
      rebackAll
    },
    data() {
        return {
            selectedCard:[],
            flip:false,
            isCurrent:-1,
            swiperOption: {
                slidesPerView: 2,
                initialSlide :0,
                centeredSlides: true,
                spaceBetween: 0,
                grabCursor: true,
                slideToClickedSlide: true,
            },
            swiperOptions: {
                slidesPerView: 4.5,
                initialSlide :0,
                // centeredSlides: true,
                spaceBetween: 5,
                grabCursor: true,
                slideToClickedSlide: true,
            },
            activityBg:require(`@/assets/images/activityBg.png`),
            shareGuide:require(`@/assets/images/shareGuide.png`),
            navList:[
                {
                    img:require(`@/assets/images/rule.png`),
                    key:1,
                    path:'/rule'
                },
                {
                    img:require(`@/assets/images/prize.png`),
                    key:2,
                    path:'/myPrize'
                },
                {
                    img:require(`@/assets/images/ranking.png`),
                    key:3
                }
            ],
            currentCards:[],
            currentCard:require(`@/assets/images/goldCard.png`),
            currentBtn:"",
            received:require(`@/assets/images/received.png`),
            rebackAll:require(`@/assets/images/rebackAll.png`),
            syntheticImmediately:require(`@/assets/images/syntheticImmediately.png`),
            synthesized:require(`@/assets/images/synthesized.png`),
            greatPrize:require(`@/assets/images/greatPrize.png`),
            prizeBack:require(`@/assets/images/prizeBack.png`),
            allCards:[
                {
                    img:require(`@/assets/images/fu.png`),
                    isHave:true,
                    num:1,
                    type:'1'
                },
                {
                    img:require(`@/assets/images/fuGray.png`),
                    isHave:false,
                    num:1,
                    type:'2'
                },
                {
                    img:require(`@/assets/images/fu.png`),
                    isHave:true,
                    num:2,
                    type:'3'
                },
                {
                    img:require(`@/assets/images/fu.png`),
                    isHave:true,
                    num:1,
                    type:'4'
                },
                {
                    img:require(`@/assets/images/fu.png`),
                    isHave:true,
                    num:3,
                    type:'5'
                },
                {
                    img:require(`@/assets/images/fu.png`),
                    isHave:true,
                    num:1,
                    type:'6'
                }
            ],
            showRank:false,
            showTask:false,
            showShare:false,
            showRebackAll:false
        }
    },
    created() {
        this.currentBtn = this.rebackAll
        setTimeout(() => {
            this.choose(this.allCards[0],0)
        }, 500);
    },
    methods: {
        choose(item,index){
            // console.log(this.selectedCard)
            if(this.isCurrent == index) return
            if(index==1 || index==2){
                this.$refs.swiper.$swiper.slideTo(0, 1000, false)
            }
            if(!item.isHave) {
                this.showTask = true
                return
            }
            // else if(this.selectedCard.indexOf(item.type)!=-1){
            //     this.selectedCard.splice(this.selectedCard.indexOf(item.type),1)
            //     // console.log(this.selectedCard.indexOf(item.type))
            // }else{
            //     this.selectedCard.push(item.type)
            // }
            this.currentCards = []
            this.isCurrent = index
            // this.flip = false
            setTimeout(() => {
                Array.from(Array(item.num), () =>{
                    let obj = new Object()
                    obj.flip = false
                    this.currentCards.push(obj)
                })
                // console.log(this.currentCards)
            }, 500);
        },
        handle(){
            this.showRebackAll = true
        },
        goTo(path){
            if(path){
                this.$router.push(path)
            }else{
                this.showRank = true
            }
            
        },
        closeRank(){
            this.showRank = false
        },
        closeTask(){
            this.showTask = false
        },
        closeAllPrizeDialog(){
            this.showRebackAll = false
        },
        reflip(item){
            
            if(item.flip) return
            setTimeout(() => {
                item.flip = true
            }, 500);
            
        },
        getTag(i){
            console.log(i)
        }
    },
}
</script>
<style lang="scss" scoped>
.activity{
    width: 100%;
    min-height: 100vh;
    position: relative;
    .activityBg{
        width: 100%;
        height: auto;
        position: absolute;
    }
    .content{
        width: 100%;
        height: auto;
        position: absolute;
        top: 1.6rem;
        // background-color: greenyellow;
        .nav{
            width: 100%;
            height: .75rem;
            padding: 0 .35rem;
            // background-color: red;
            .navItem{
                width: 2.3rem;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }
        .card{
            width: 100%;
            height: 4.5rem;
            // margin-top: .2rem;
            // background-color: greenyellow;
            overflow-x: scroll;
            overflow-y: hidden;
            display: -webkit-box;
            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */
            .centers{
                width: 100%;
                margin: 0 auto;
                display: flex;
                position: relative;
                // background-color: red;
                .swiper{
                    width: 100%;
                    .swiper-slide{
                        // width: 2.9rem!important;
                        height: 3.8rem;
                        margin: .25rem 0;
                        // border: 1px solid #000;
                        // background-color: greenyellow;
                    }
                }
            }
            .currentCard{
                width: 2.9rem;
                height: 3.8rem;
                margin: 0 auto;
                img{
                    width: 2.9rem;
                    height: 3.8rem;
                }
            }
        }
        .btn{
            width: 4.14rem;
            height:.97rem;
            margin: 0 auto ;
            img{
                width:100%;
                height:100%;
            }
        }
        .cardList{
            width: 100%;
            height: 2.3rem;
            margin-top: .3rem;
            // background-color: greenyellow;
            overflow-x: scroll;
            overflow-y: hidden;
            display: -webkit-box;
            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */
            .centers{
                width: 100%;
                margin: 0 auto;
                padding: 0 .1rem;
                display: flex;
                // background-color: red;
                .swiper{
                    width: 100%;
                    padding: 0 .1rem;
                    // background-color: pink;
                    .swiper-slide{
                        // width: 1.4rem!important;
                        height: 2.3rem;
                        // margin: .25rem 0;
                        // border: 1px solid #000;
                        // background-color: greenyellow;
                    }
                }
            }
            .item{
                width: 1.4rem;
                height: 1.9rem;
                margin: .25rem auto 0;
                position: relative;
                // background-color: red;
                img{
                    width: 100%;
                    height: 100%;
                }
                .num{
                    width: .41rem;
                    height: .41rem;
                    background-color: #b3fff3;
                    border: solid .03rem #4c80e1;
                    font-size: .28rem;
                    color:#2d1ed3;
                    text-align: center;
                    line-height: .38rem;
                    position: absolute;
                    right:-0.05rem;
                    top:-0.1rem;
                    border-radius: 50%;
                    z-index:2;
                }
            }
            .current{
                width: 1.45rem;
                height: 2.1rem;
                margin: .1rem auto 0;
                // box-shadow: 0 0 .1rem .1rem #fff;
                // border: solid .06rem #ffffff;
                // border-radius: .1rem;
            }
        }
        
    }
    .shareGuide{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index:999;
        background-color: rgba($color: #000000, $alpha: 0.8);
        img{
            width: 2.2rem;
            height: auto;
            position: absolute;
            right: .5rem;
            top: .2rem;
        }
    }
    .flip-container {
      -webkit-perspective: 1000;
      -moz-perspective: 1000;
      -ms-perspective: 1000;
      perspective: 1000;

      -ms-transform: perspective(1000px);
      -moz-transform: perspective(1000px);
      -moz-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;

    //   border: 1px solid #ccc;
    }

    .flip-container,
    .front,
    .back {
        width: 2.9rem;
        height: 3.8rem;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .flipper {
        width: 100%;
        height:100%;
        -webkit-transition: 1s;
        -webkit-transform-style: preserve-3d;
        -ms-transition: 1s;

        -moz-transition: 1s;
        -moz-transform: perspective(1000px);
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;

        transition: 1s;
        transform-style: preserve-3d;
        position: relative;
        // transition: all ease-in 1s;
        // transform-style: preserve-3d;
        // perspective: 800px;
    }
    .flip{
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
    .front,
    .back {
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }

    .front {
      -webkit-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      z-index: 2;
    }

    .back {
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }
    ::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
}
</style>