import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/page/Home.vue';

const routes = [
	{
		path: '/:catchAll(.*)',
		component: () => import('@/page/NotFound.vue')
	},
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/Channel',
		name: 'Channel',
		component: () => import('@/page/Channel.vue')
	}
];

//createWebHistory
//createWebHashHistory 可以避免頁面重整抓不到資料的問題
const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;