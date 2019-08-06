<template>
	<article class="archive">
		<router-link to="/" class="btn --revert archive__back">Back</router-link>
		<section class="archive__newsletter">

		</section>
		<select class="archive__dropdown dropdown">
			<option v-for="(campaign, index) in campaigns" :key="index">
				{{ campaign.subject }}
			</option>
		</select>
		<subscribe-popup></subscribe-popup>
	</article>
</template>
<script>
import axios from 'axios';
import SubscribePopup from './SubscribePopup';

export default {
	name: 'ArchivePage',
	components: {
		SubscribePopup,
	},
	data() {
		return {
			campaigns: [],
		};
	},
	mounted() {
		axios
		.get(`${process.env.URL}:${process.env.PORT}/emailCampaigns`, {
			headers: {
				accept: 'application/json',
			},
		})
		.then((response) => {
			this.campaigns = JSON.parse(response.data.body).campaigns;
			// this.$refs.parse.innerHTML = campaigns[0].htmlContent;
		})
		.catch((error) => {
			console.error(error);
		});
	},
};
</script>
