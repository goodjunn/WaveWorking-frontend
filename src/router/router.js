import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	}
];

//createWebHistory
//createWebHashHistory 可以避免頁面重整抓不到資料的問題
const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;