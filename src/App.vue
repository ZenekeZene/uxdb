<template>
  <main class="app">
	<nav class="navigation">
		<a href="/archive">Archive</a>
		<a href="/sponsorship">Sponsorship</a>
	</nav>
	<router-view/>
	<footer class="footer">
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
