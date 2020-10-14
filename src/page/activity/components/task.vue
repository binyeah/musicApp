<template>
    <div class="task">
        <img :src="close" alt="" class="close" @click="closeTask">
        <div class="content">
            <p class="title" v-if="type==1">您还没有获得这张卡牌</p>
            <div v-else>
                <p class="title">合成失败，您还缺少 以下卡牌：</p>
                <div class="center">
                    <div class="cell" v-for="(item,index) in cardList" :key="index">{{item}}</div>
                </div>
            </div>
            <task-center/>
        </div>
    </div>
</template>
<script>
import taskCenter from '@/components/taskCenter'
export default {
    components:{
        taskCenter
    },
    data() {
        return {
            type:2,
            close:require(`@/assets/images/close.png`),
            cardList:['助力牌','遇见牌',"'易'手好牌","坐享牌","约定牌"]
        }
    },
    methods: {
        closeTask(){
            this.$emit('closeTask')
        }
    },
}
</script>
<style lang="scss" scoped>
.task{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow-y: scroll;
    background-color: rgba($color: #000000, $alpha: 0.9);
    .close{
        width: .5rem;
        height: .5rem;
        position: absolute;
        right: .17rem;
        top: .3rem;
    }
    .content{
        width: 6.95rem;
        height: auto;
        margin: .5rem auto 0;
        .title{
            color: #fff;
            text-align: center;
            font-size: .26rem;
        }
        .center{
            width: 100%;
            flex-wrap: wrap;
            padding: 0 .3rem;
            .cell{
                width: auto;
                height: .42rem;
                padding: 0 .3rem;
                background-color: #8a1ac6;
                border-radius: 0.21rem;
                color: #fff;
                font-size: .28rem;
                margin: .07rem;
            }
        }
    }
}
</style>