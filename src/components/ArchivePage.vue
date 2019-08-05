<template>
	<article class="archive">
		<router-link to="/" class="btn --revert archive__back">Back</router-link>
		<section class="archive__newsletter">

		</section>
		<select class="archive__dropdown dropdown">
			<option>Newsletter I</option>
			<option>Newsletter II</option>
			<option>Newsletter III</option>
			<option>Newsletter IV</option>
			<option>Newsletter V</option>
		</select>
		<subscribe-popup></subscribe-popup>
	</article>
</template>
<script>
import SubscribePopup from './SubscribePopup';

export default {
	name: 'ArchivePage',
	components: {
		SubscribePopup,
	},
};
</script>
