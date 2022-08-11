import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/registration',
		name: 'registration',
		component: () => import('../views/Registration.vue')
	},
	{
		path: '/password',
		name: 'password',
		component: () => import('../views/Password.vue')
	},
	{
		path: '/main-page',
		name: 'main-page',
		component: () => import('../views/MainPage.vue')
	},
	{
		path: '/new-card',
		name: 'new-card',
		component: () => import('../views/Card.vue')
	},
	{
		path: '/card-otjimaniy',
		name: 'card-otjimaniy',
		component: () => import('../views/CardOtjimaniy.vue')
	},
	{
		path: '/card-podtygivaniy',
		name: 'card-podtygivaniy',
		component: () => import('../views/CardPodtygivaniy.vue')
	},
	{
		path: '/card-press',
		name: 'card-press',
		component: () => import('../views/CardPress.vue')
	},
	{
		path: '/card-na-nogi',
		name: 'card-na-nogi',
		component: () => import('../views/CardNaNogi.vue')
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/Profile.vue')
	},
	{
		path: '/edit-profile',
		name: 'edit-profile',
		component: () => import('../views/EditProfile.vue')
	},
	{
		path: '/password-profile',
		name: 'password-profile',
		component: () => import('../views/PasswordProfile.vue')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../views/test.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
