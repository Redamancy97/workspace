<template>
    <div class="list">
        <ul>
            <li><a>全部分类</a></li>
            <li v-for="item in list" :key="item.categoryId">
                <router-link :to="'/goods?id='+item.categoryId">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // shop: [],
                list: []
            }
        },
        created() {
            // 左边目录
            axios.post("https://showme.myhope365.com/api/shop/shopCategory/open/list").then(res => {
                console.log(res);
                this.list = res.data.rows;
            });
            // console.log()
            // 右边
            // axios.post("https://showme.myhope365.com/api/shop/shopGoods/open/list").then(res => {
            //     this.shop = res.data.rows;
            // })
        }
    }
</script>
<style scope>
    .list {
        width: 100%;
        height: 100%;
        background-color: #001529;
        color: #F3F4F5;
        /* padding: 10px; */
    }

    .list li {
        height: 50px;
        padding: 10px 30px;
        border-bottom: 1px solid #ccc;
    }

    .list li>a {
        color: #ffffff;
        text-decoration: none;
    }
</style>