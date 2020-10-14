<template>
    <div class="page center">
        <img :src="unStart" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            unStart:require(`@/assets/images/unStart.png`),
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