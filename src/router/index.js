import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/registration',
        name: 'registration',
        component: () =>
            import ('../views/Registration.vue')
    },
    {
        path: '/password',
        name: 'password',
        component: () =>
            import ('../views/Password.vue')
    },
    {
        path: '/main-page',
        name: 'main-page',
        component: () =>
            import ('../views/MainPage.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/edit-profile',
        name: 'edit-profile',
        component: () =>
            import ('../views/EditProfile.vue')
    },
    {
        path: '/password-profile',
        name: 'password-profile',
        component: () =>
            import ('../views/PasswordProfile.vue')
    },
    {
        path: '/loader',
        name: 'loader',
        component: () =>
            import ('../views/Loader.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ('../views/test.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router