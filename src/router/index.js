import Vue from "vue"
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import User from '@/pages/User'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'

    },
    {
        path: '/layout',
        redirect: '/layout/home'
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Layout',
        path: '/layout',
        component: Layout,
        children: [{
                name: 'Home',
                path: 'home',
                component: Home
            },
            {
                name: 'User',
                path: 'user',
                component: User
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router