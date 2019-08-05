<template>
	<article class="subscribe-popup">
		<span class="subscribe-popup__close">X</span>
		<img class="subscribe-popup__image" src="../assets/images/eye-popup.svg">
		<p margin-top>Get it straight away in your inbox every Tuesday</p>
		<div class="subscribe">
			<input type="email" placeholder="Enter your email">
			<button class="btn"><img src="../assets/images/icon-enter.svg"></button>
		</div>
	</article>
</template>

<script>
import SubscribePopup from './SubscribePopup';

export default {
	name: 'SubscribePopup',
	components: {
		SubscribePopup,
	},
};
</script>
