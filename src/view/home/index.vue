<template>
    <div class="home">
        <div class="header">
            <van-search
            v-model="keyWord"
            :show-action="isSearch"
            placeholder="请输入搜索关键词"
            shape="round"
            background="#4fc08d"
            @focus="onFocus"
            @input="onSearch"
            @cancel="onCancel"
            >
            </van-search>
        </div>
        <banner :dataList="bannerList" v-if="!isSearch"/>
        <songList :songList="songList" @play="play" v-if="!isSearch"/>
        <searchList :songList="searchList" @play="play" v-else/>
    </div>
</template>
<script>
import myHeader from './components/myheader';
import songList from './components/songList';
import searchList from './components/searchList';
import banner from './components/banner';
import {newsong,search,getbanner} from '@/api/proxy.js';
export default {
    name:"home",
    components:{
        myHeader,
        songList,
        searchList,
        banner
    },
    data(){
        return{
            songList:[],
            searchList:[],
            showPlayPage:false,
            keyWord:"",
            isSearch:false,
            bannerList:[]
        }
    },
    mounted() {
        this.getNewSongs();
        this.getBanner()
    },
    methods: {
        async onSearch(keyWord){
            if(!keyWord) return;
            try{
                const data = {
                    keywords:keyWord
                }
                const res = await search(data)
                this.searchList = res.result.songs || []
                // console.log(this.searchList)
            }catch(e){
                console.log(e)
            }
        },
        onFocus(){
            this.isSearch = true
            this.searchList = []
        },
        onCancel(){
            this.isSearch = false
        },
        async getNewSongs(){
            // console.log(data)
            try{
                const res = await newsong()
                this.songList = res.result || []
                // console.log(this.songList)
            }catch(e){
                console.log(e)
            }
        },
        async getBanner(){
            // console.log(data)
            try{
                const res = await getbanner()
                this.bannerList = res.banners || []
            }catch(e){
                console.log(e)
            }
        },
        async play(id){
            eventBus.$emit('play')
            this.showPlayPage = true
            this.$store.dispatch('song/setNewId',id); 
        }
    },
}
</script>
<style lang="scss" scoped>
.home{
    padding-top: 1.1rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .header{
        width: 100%;
        // height: 1rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
    }  
}
</style>