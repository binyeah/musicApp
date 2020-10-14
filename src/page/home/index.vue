<template>
    <div class="home">
        <my-header/>
        <div class="content space-between">
            <p>1</p>
            <p>2</p>
        </div>
    </div>
</template>
<script>
import myHeader from './components/myheader'
export default {
    components:{
        myHeader
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.home{
    .content{
        margin-top: 50px;
        width: 100%;
    }
}
</style>