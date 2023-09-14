import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/login',
			name: 'login',
			component: () => import('@/components/Login'),
		},
	],
});
