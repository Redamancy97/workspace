<template>
    <div class="detail">
        <ul class="right">
            <li v-for="(item,index) in shop" :key="index">
                <p><img :src="item.coverImgUrl" alt=""></p>
                <span>{{item.intro}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                shop: []
            }
        },
        // methods: {
        //     // click(a) {
        //     //     const formData = new FormData();
        //     //     formData.append("categoryId", a)
        //     //     axios.post("https://showme.myhope365.com/api/shop/shopGoods/open/list", formData).then(res => {
        //     //         this.shop = res.data.rows;
        //     //     })
        //     // },
        //     allCategories() {
        //         axios.post("https://showme.myhope365.com/api/shop/shopGoods/open/list").then(res => {
        //             this.shop = res.data.rows;
        //         })
        //     }
        // },
        created() {

            axios.post("https://showme.myhope365.com/api/shop/shopGoods/open/list").then(res => {
                this.shop = res.data.rows;
            })

        },
        watch: {
            // 函数名为需要监听的内容
            // $router 路由器，用方法进行跳转
            // 
            $route() {
                // debugger
                // 如果当前显示的是这个组件，并且路由变化后还是这个组件
                // 我们就能监听到这次路由的变化
                console.log(this.$route.query.id);
                // 每次路由变化的时候，都在这里请求一下数据
                // 请求接口
                const id = new FormData();
                id.append('categoryId', this.$route.query.id);
                axios.post("https://showme.myhope365.com/api/shop/shopGoods/open/list", id).then(
                    res => {
                        this.shop = res.data.rows;
                    }
                )
            }
        },
    }

</script>
<style>
    .detail {
        width: 100%;
        height: 100%;
        background-color: #F0F2F5;
        padding: 0px 60px;
    }

    .right {
        height: 100%;
        /* margin-left: 50px; */
        /* flex-grow: 1; */
        /* background-color: red; */
    }

    .right img {
        width: 200px !important;
        height: 200px;
    }

    .right li {
        padding: 15px;
        width: 200px !important;
        float: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* margin: auto; */
    }
</style>