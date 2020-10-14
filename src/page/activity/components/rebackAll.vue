<template>
    <div class="page" >
        <div class="list flex wrap">
            <div v-for="(item,index) in prizeList" :key="index" class="item">
                <img :src="bigCardBack" alt="" class="bg">
            </div>
        </div>
        <div class="btn">
            <img :src="returnGame" alt="" @click="closeDialog">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            returnGame:require(`@/assets/images/returnGame.png`),
            bigCardBack:require(`@/assets/images/bigCardBack.png`),
            prizeList:[
                {

                },
                {

                },
                {

                },
                {

                },
                {

                },
                {

                }
            ]
        }
    },
    created() {
        
    },
    methods: {
        closeDialog(){
            this.$emit('closeAllPrizeDialog')
        }
    },
}
</script>
<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.9);
    z-index: 99;
    .list{
        width: 100%;
        max-height: calc(100% - 4rem);
        overflow-y: scroll;
        padding: 0.5rem .7rem;
        .item{
            width: 3.05rem;
            padding: 0 0.125rem;
            margin-bottom: .3rem;
            position: relative;
            // background-color: greenyellow;
            .bg{
                width: 100%;
                height: 100%;
            }
        }
    }
    .btn{
        width: 2.3rem;
        height: .75rem;
        margin: .5rem auto 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>