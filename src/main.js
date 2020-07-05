import Vue from 'vue/dist/vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Login from './views/Login.vue'
import Goods from './views/Goods.vue'
import base from './styles/base.css'


const router = new VueRouter({
    routes: [{
            path: "/",
            component: Login
        },
        {
            path: "/goods",
            component: Goods,
            children: [{
                path: "",
                component: Goods
            }]
        }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})