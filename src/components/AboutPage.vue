<template>
	<article class="l-main">
		<picture style="width: 100%;">
			<source media="(min-width: 48rem)" class="logo --center l-main__image" srcset="../../static/hero.svg">
			<img class="logo l-main__image" src="../assets/images/logo.svg">
		</picture>
		<section class="form">
			<h1>Discover the newsletter which helps more
				than 1000 designers,
				creatives and researchers</h1>
			<div class="intro-subscribe">
				<p>Get the last curated articles by top designers,
					resources and tools and learning materials to
					achieve a successful career in design, we are
					sure about it 😚
				</p>
				<subscribe-item margin-vertical-2></subscribe-item>
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
