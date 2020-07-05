<template slot="panel">
    <div class="panel">
        <input type="text" placeholder="请输入用户名">
        <br>
        <input type="password" placeholder="请输入密码">
        <br>
        <button @click="submit">登录</button>
    </div>
</template>
<script>
    export default {
        methods:{
            submit(){
                this.$router.push("/goods");
            }
        }
    }
</script>
<style scoped>
    .panel {
        width: 300px;
        height: 250px;
        border-radius: 20px;
        background-color: #ffffff;
        text-align: center;
        background-image: none;
        margin: auto;
        position: absolute;
        top: 30vh;
        left: 40%;
    }

    input {
        width: 200px;
        height: 30px;
        margin-top: 30px;
        padding: 5px;
    }

    button {
        width: 200px;
        height: 30px;
        margin: 20px auto;
        border: none;
        border-radius: 2px;
        background-color: #00b7cf;
        color: #ffffff;
        font-size: 16px;
    }
</style>