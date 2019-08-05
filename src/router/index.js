import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from '../components/AboutPage';
import ThanksPage from '../components/ThanksPage';
import ArchivePage from '../components/ArchivePage';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'about',
			component: AboutPage,
		},
		{
			path: '/thanks',
			name: 'thanks',
			component: ThanksPage,
		},
		{
			path: '/archive',
			name: 'archive',
			component: ArchivePage,
		},
	],
});
