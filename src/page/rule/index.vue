<template>
    <div class="rule">
        <img :src="ruleBg" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleBg:require(`@/assets/images/ruleBg.png`),
        }
    },
}
</script>
<style lang="scss" scoped>
.rule{
    width: 100%;
    height: auto;
    padding: .3rem;
    background-color: #8a1ac6;
    img{
        width: 100%;
        height:auto;
    }
}
</style>