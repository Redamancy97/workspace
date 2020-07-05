<template>
    <div>
        <router-view></router-view>
        <!-- <Goods></Goods> -->
    </div>
</template>
<script>
    import Login from './views/Login.vue'
    import Goods from './views/Goods.vue'

    export default {
        components: {
            Login,
            Goods
        }
    }
</script>
<style>

</style>