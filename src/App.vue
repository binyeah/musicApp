<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <playSong ref="playSong" v-if="showPlayPage"/>
  </div>
</template>
<script>
import playSong from '@/components/playSong';
export default {
  name: 'App',
  components: {
    playSong
  },
  data() {
    return {
      showPlayPage:false,
    }
  },
  mounted() {
    eventBus.$on('play',this.play)
  },
  methods: {
    async play(){
      // console.log('play')
      this.showPlayPage = true
      await this.$nextTick()
      this.$refs.playSong.init()
    }
  },
}
</script>