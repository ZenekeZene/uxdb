<template>
  <main class="app">
	<nav class="navigation">
		<router-link to="archive">Archive</router-link>
		<router-link to="sponsorship">Sponsorship</router-link>
	</nav>
	<transition name="fade" mode="out-in">
		<router-view/>
	</transition>
	<footer class="footer" margin-top-2>
		<p>Published by Juan Jesús Millo. Developed by Héctor Villar Mozo.
			<a href="#">Follow us on Linkedin</a>.</p>
	</footer>
  </main>
</template>

<script>
import GithubItem from './components/GithubItem';

export default {
	name: 'App',
	components: {
		GithubItem,
	},
};
</script>
