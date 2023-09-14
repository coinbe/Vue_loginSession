import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/components/Login'),
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('@/components/Main'),
		},
	],
});
