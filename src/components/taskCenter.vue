<template>
    <div class="taskCenter">
        <img :src="taskBg" alt="" class="taskBg">
    </div>
</template>
<script>
export default {
    data() {
        return {
            taskBg:require(`@/assets/images/taskBg.png`),
        }
    },
}
</script>
<style lang="scss" scoped>
.taskCenter{
    width: 100%;
    margin-top: .3rem;
    position: relative;
    .taskBg{
        width: 100%;
    }
}
</style>