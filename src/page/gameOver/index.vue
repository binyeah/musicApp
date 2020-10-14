<template>
    <div class="page center">
        <img :src="gameOver" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            gameOver:require(`@/assets/images/gameOver.png`),
        }
    },
}
</script>
<style lang="scss" scoped>
.page{
    width: 100%;
    height: 100vh;
    background-color: #8d1db0;
    img{
        width: 3.86rem;
        height: auto;
    }
}
</style>