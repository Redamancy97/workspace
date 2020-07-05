<template>
    <div style="display: flex; height: 1000px;">
        <div class="left">
            <List></List>
        </div>
        <div class="right">
            <Navbar></Navbar>
            <Detail></Detail>
            <!-- <router-view></router-view>  -->
        </div>

    </div>
</template>
<script>
    import List from '../layout/List.vue'
    import Navbar from '../layout/Navbar.vue'
    import Detail from '../layout/Detail.vue'

    export default {
        components: {
            List,
            Navbar,
            Detail
        },
    }
    // const router = new VueRouter({
    //     routes: [{
    //         path: " ",
    //         component: 
    //     }]
    // })
</script>
<style scoped>
    .left {
        width: 200px;
        height: 100%;
        /* 设置收缩因子设置为0 */
        flex-shrink: 0;
    }

    .right {
        height: 100%;
        /* 扩张因子 */
        flex-grow: 1;
        /* background-color: hotpink; */
    }
</style>