<template>
  <main class="app">
	<nav class="navigation">
		<a href="/archive">Archive</a>
		<a href="/sponsorship">Sponsorship</a>
	</nav>
    <router-view/>
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
