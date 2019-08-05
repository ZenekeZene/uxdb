<template>
	<article class="home">
		<img class="home__logo" src="../assets/images/logo.svg">
		<section class="home__form">
			<h1>Discover the newsletter which helps more
				than 1000 designers,
				creatives and researchers</h1>
			<p>Get the last curated articles by top designers,
				resources and tools and learning materials to
				achieve a successful career in design, we are
				sure about it 😚
			</p>
			<div class="subscribe">
				<input type="email" placeholder="Enter your email">
				<button class="btn"><img src="../assets/images/icon-enter.svg"></button>
			</div>
			<ul class="features">
				<li class="features__item">
					<span><img src="../assets/images/icon-article.svg"></span>
					Latest relevant articles</li>
				<li class="features__item">
					<span><img src="../assets/images/icon-save.svg"></span>
					Handpicked resources</li>
				<li class="features__item">
					<span><img src="../assets/images/icon-tool.svg"></span>
					Curated design & research tools</li>
				<li class="features__item">
					<span><img src="../assets/images/icon-love.svg"></span>
					Lots and lots of love 💜</li>
			</ul>
		</section>
		<footer class="footer">
			<p>Published by Juan Jesús Millo. Developed by Héctor Villar Mozo.
				<a href="#">Follow us on Linkedin</a>.</p>
		</footer>
	</article>
</template>
<script>

	export default {
		name: 'AboutPage',
	};
</script>
