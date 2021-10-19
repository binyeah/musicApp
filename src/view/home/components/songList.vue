<template>
    <div class="content">
        <div v-for="(item,index) in songList" :key="index" class="item space-between" @click="playSong(item)">
            <img :src="item.picUrl" alt="">
            <div class="right">
                <div>{{item.name}}</div>
                <div class="overFlow">
                    <span v-if="item.song.artists[0]">{{item.song.artists[0].name}}</span>
                    <span v-if="item.song.artists[1]">-{{item.song.artists[1].name}}</span>
                    —— {{item.song.album.name}}
                </div>
                <!-- <div>{{item.song.artists[0].name}}-{{item.song.album.name}}</div> -->
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        songList:{
            type:Array,
            default:()=>[]
        }
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        playSong(song){
            // console.log(song.id)
            this.$emit('play',song.id)
        },
        
    },
}
</script>
<style lang="scss" scoped>
.content{
    // margin-top: 1.2rem;
    width: 100%;
    padding:0 0.1rem 1.8rem;
    .item{
        width: 100%;
        height: 1.2rem;
        padding: .1rem;
        border-bottom: .01rem solid #666;
        img{
            width: 1rem;
            height: 1rem;
            object-fit: cover;
            border-radius: .1rem;
        }
        .right{
            width: calc(100% - 1.1rem);
            line-height: .5rem;
        }
    }
}
</style>