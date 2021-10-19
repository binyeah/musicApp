<template>
    <div class="playSong" @touchmove.prevent>
        <div class="open" v-show="open" >
            <div class="background" :style="pageStyle"></div>
            <div class="header space-between">
                <div @click="open = false">
                    <van-icon name="arrow-left" />
                </div>
                <div>{{ (songDetail||{}).name }}</div>
                <div></div>
            </div>
            <div class="lyric">
                <scroll class="lyric-wrapper" ref="lyricList" :data="(lyric || {}).lines">
                    <div>
                    <div class="lyric">
                        <p
                        v-for="(line, index) in lyric.lines"
                        :key="index"
                        ref="lyricLine"
                        :class="{ current: currentLineNum === index }"
                        class="text"
                        >
                        {{ line.txt }}
                        </p>
                    </div>
                    </div>
                </scroll>
            </div>
            <div class="footer">
                <div class="progress space-between">
                    <div class="time">{{ formatTime(playTime) }}</div>
                    <div class="slider">
                        <van-slider
                        v-model="progress"
                        active-color="#ee0a24"
                        @change="progressChange"
                        :min="0"
                        :max="1000"
                        >
                        <template #button>
                            <div class="custom-button"></div>
                        </template>
                        </van-slider>
                    </div>
                    <div class="time">{{ formatTime(songDetail.dt) }}</div>
                </div>
                <div class="btns space-between">
                    <div></div>
                    <div class="play">
                        <van-icon :name="playing?'pause-circle-o':'play-circle-o'" @click="toggelePlay"/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <div v-show="!open" class="close" @click="open=true" >
            <div class="content space-between">
                <div class="left">
                    <img :src="((songDetail||{}).al||{}).picUrl||''" alt="">
                </div>
                <div class="right">
                    <div class="progress space-between">
                        <div class="time">{{ formatTime(playTime) }}</div>
                        <div class="slider">
                            <van-slider
                                v-model="progress"
                                active-color="#ee0a24"
                                @change="progressChange"
                                :min="0"
                                :max="1000"
                            >
                                <template #button>
                                <div class="custom-button"></div>
                                </template>
                            </van-slider>
                        </div>
                        <div class="time">{{ formatTime(songDetail.dt) }}</div>
                    </div>
                    <div class="txt">
                        <div class="overFlow">{{songDetail.name}}<span v-if="songDetail && songDetail.ar && songDetail.ar[0] && songDetail.ar[0].name">-{{songDetail.ar[0].name}}</span></div>
                        <van-notice-bar
                        background="transparent"
                        :text="txt"
                            />
                        <!-- <marquee behavior="slide">哈哈哈哈哈哈哈dfhhfdhvjdf对方的回复好的好地方</marquee> -->
                    </div>
                </div>
            </div>
            
        </div>
        <audio :src="songUrl" v-if="songUrl" ref="audio" @timeupdate="onTimeupdate"></audio>
    </div>
</template>
<script>
import { detail, songUrl, lyric } from "@/api/proxy.js";
import { mapGetters } from "vuex"; //先要引入
import Lyric from "lyric-parser";
import scroll from "./scroll.vue";
export default {
    components: {
        scroll,
    },
    data() {
        return {
            songDetail: {},
            songUrl: "",
            lyric: [],
            pageStyle: {
                display: "none",
            },
            currentLineNum: 0,
            progress: 0,
            playTime: 0,
            open: true,
            txt:"",
            playing:true,
        };
    },
    computed: {
        ...mapGetters("song", {
            id: "renderId",
        }),
    },
    mounted() {},
    methods: {
        init() {
            this.open = true
            this.lyric = {}
            this.songUrl = ''
            this.songDetail = {}
            if (this.id) {
                this.getSongDetail(this.id);
                this.getSongUrl(this.id);
                this.getSongLyric(this.id);
            }
        },
        // 播放｜｜暂停
        toggelePlay(){
            this.playing = !this.playing
            this.lyric.togglePlay();
            //播放中
            if(this.playing){
                this.$refs.audio.play();
                // this.lyric.play();
                this.lyric.seek(this.playTime);
            }else{
                this.$refs.audio.pause();
                // this.lyric.stop()
            } 
        },
        // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
        onTimeupdate(res) {
            const playTime = res.target.currentTime * 1000;
            this.playTime = playTime>=this.songDetail.dt?this.songDetail.dt:playTime
            // console.log(res.target.currentTime,this.formatTime(this.playTime),this.songDetail.dt)
            this.progress = parseInt((this.playTime / this.songDetail.dt) * 1000);
            // this.lyric.seek(this.playTime);
        },
        // 时间长度转分秒
        formatTime(time) {
            let t;
            if (time > -1) {
                const min = `${Math.floor(time / 60000) % 60}`.padStart("2", "0");
                const sec = `${parseInt((time - min * 60000) / 1000)}`.padStart(
                "2",
                "0"
                );
                t = `${min}:${sec}`;
            }
            return t;
        },
        progressChange(val) {
            this.playTime = parseInt((val / 1000) * this.songDetail.dt);
            // console.log(this.playTime)
            this.$refs.audio.currentTime = this.playTime / 1000;
            this.lyric.seek(this.playTime);
            this.$refs.audio.play();
        },
        
        async getSongDetail(id) {
            try {
                const res = await detail({ id });
                // console.log(res)
                this.songDetail = res.songs[0] || {};
                this.pageStyle = {
                backgroundImage: "url(" + this.songDetail.al.picUrl + ")",
                display: "block",
                };
            } catch (error) {
                console.log(error);
            }
        },
        async getSongUrl(id) {
            try {
                const res = await songUrl({ id });
                this.songUrl = res.data[0].url || "";
                if (this.songUrl) {
                setTimeout(() => {
                    // console.log(this.$refs.audio)
                    this.$refs.audio.play();
                }, 50);
                }
                // console.log(res)
            } catch (error) {
                console.log(error);
            }
        },
        async getSongLyric(id) {
            try {
                const res = await lyric({ id });
                this.lyric = new Lyric(res.lrc.lyric, this.lyricHandler);
                this.lyric.seek(0)
                // console.log(this.lyric)
            } catch (error) {
                console.log(error);
            }
        },
        lyricHandler({ lineNum, txt }) {
            // console.log(lineNum, txt);
            this.txt = txt
            this.currentLineNum = lineNum;
            // 若当前行大于5,开始滚动,以保歌词显示于中间位置
            if (lineNum > 7) {
            let lineEl = this.$refs.lyricLine[lineNum - 7];
                // 结合better-scroll，滚动歌词
                this.$refs.lyricList.scrollToElement(lineEl, 1000);
            } else {
                this.$refs.lyricList.scrollToElement(0, 0, 1000);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.playSong {
    .open {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: #fff;
        .background{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            -webkit-filter: blur(15px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            filter: blur(.1rem);
        }
        .header {
            width: 100%;
            height: 1rem;
            position: absolute;
            top: 0;
            background-color: rgba($color: #000000, $alpha: 0.5);
            color: #fff;
            padding: 0 0.2rem;
            // position:absolute;
        }
        >.lyric{
            position:absolute;
            box-sizing: border-box;
            top: 1rem;
            width: 100%;
            height: calc(100vh - 3rem);
            padding:0.5rem ;
            background-color: rgba($color: #000000, $alpha: 0.2);
            .lyric-wrapper {
                width: 100%;
                height: 100%;
                text-align: center;
                color: #fff;
                overflow: hidden;
                line-height: 0.6rem;
                
                .current {
                    color: red;
                    font-size: .35rem;
                }
            }
        }
        
        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            // margin-top: 0.5rem;
            height: 2rem;
            padding:  0.2rem;
            background-color: rgba($color: #fff, $alpha: 0.6);
        }
    }
    .close {
        width: 100%;
        height: 1.5rem;
        background-color: rgba($color: #000000, $alpha: 0.8);
        position: fixed;
        z-index: 9999;
        left: 0;
        bottom: 0;
        padding: 0.1rem .2rem;
        .content{
            width: 100%;
            height: 100%;
            .left{
                width: 1.2rem;
                height: 1.2rem;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: .1rem;
                }
            }
            .right{
                width: calc(100% - 1.3rem);
                height: 1.2rem;
                .txt{
                    // margin-top: .1rem;
                    width: 100%;
                    // text-align: center;
                    color: #fff;
                    .van-notice-bar{
                        height: .4rem;
                        padding: 0;
                        color: #fff;
                    }
                }
            }
        }
    }
    .progress {
        width: 100%;
        height: 0.5rem;
        // background-color: pink;
        color: #fff;
        .time {
          width: 1rem;
          // background-color: red;
          text-align: center;
        }
        .slider {
          width:calc(100% - 2.2rem);
          .custom-button {
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            background-color: #fff;
          }
        }
    }
    .btns{
        width: 100%;
        height: 1rem;
        // background-color: pink;
        font-size: 1rem;
        .play{
            // background-color: #fff;
            height: 100%;
            color:#fff
        }
    }
}
</style>