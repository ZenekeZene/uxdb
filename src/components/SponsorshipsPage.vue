<template>
	<article class="home">
		<img class="home__logo" src="../../static/sponsorships.svg">
		<section class="home__form">
			<h1>DAdvertise on our weekly mail publication and be heared by a community in love with what it does</h1>
			<div class="intro-subscribe">
				<p>People from all around the world reads our publication, and they love it. The readers are mostly product designers, creative ones working as freelances, researches as user experience designers and front-end developers.
				</p>
				<button class="btn">Reserve your slot</button>
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
	name: 'SponsorshipsPage',
	components: {
		SubscribeItem,
	},
};
</script>
