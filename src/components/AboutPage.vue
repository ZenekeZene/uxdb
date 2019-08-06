<template>
	<article class="home">
		<picture style="width: 100%;">
			<source media="(min-width: 48rem)" class="home__logo --center" srcset="../../static/hero.svg">
			<img class="home__logo" src="../assets/images/logo.svg">
		</picture>
		<section class="home__form">
			<h1>Discover the newsletter which helps more
				than 1000 designers,
				creatives and researchers</h1>
			<div class="intro-subscribe">
				<p>Get the last curated articles by top designers,
					resources and tools and learning materials to
					achieve a successful career in design, we are
					sure about it 😚
				</p>
				<subscribe-item></subscribe-item>
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
	</article>
</template>
<script>
import SubscribeItem from './SubscribeItem';

export default {
	name: 'AboutPage',
	components: {
		SubscribeItem,
	},
};
</script>
