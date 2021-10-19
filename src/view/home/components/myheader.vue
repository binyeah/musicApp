<template>
    <div class="header">
        <van-search
        v-model="keyWord"
        show-action
        placeholder="请输入搜索关键词"
        shape="round"
        background="#4fc08d"
        @input="onSearch"
        @cancel="onCancel"
        >
        </van-search>
    </div>
</template>
<script>
export default {
    data(){
        return{
            keyWord:"",
        }
    },
    methods: {
        onSearch(){
            this.$emit('onSearch',this.keyWord)
        },
        onCancel(){
            this.$emit('onCancel')
        }
    },
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
    // height: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
}
</style>