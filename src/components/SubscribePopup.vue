<template>
	<article class="subscribe-popup">
		<span class="subscribe-popup__close" @click="$emit('close', false)">X</span>
		<img class="subscribe-popup__image" src="../assets/images/eye-popup.svg">
		<p margin-top>Get it straight away in your inbox every Tuesday</p>
		<subscribe-item isMini></subscribe-item>
	</article>
</template>

<script>
import SubscribeItem from './SubscribeItem';

export default {
	name: 'SubscribePopup',
	components: {
		SubscribeItem,
	},
};
</script>
