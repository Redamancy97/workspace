<template>
    <div>
        <Background></Background>
        <LoginPanel></LoginPanel>
    </div>
</template>
<script>
    import LoginPanel from '../components/LoginPanel.vue'
    import Background from '../router/Background.vue'
    export default {
        components: {
            Background,
            LoginPanel
        }
    }
</script>
<style>
</style>