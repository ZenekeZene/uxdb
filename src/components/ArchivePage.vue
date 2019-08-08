<template>
	<article class="archive">
		<router-link to="/" class="btn --revert archive__back">Back</router-link>
		<transition name="fade" mode="out-in">
			<section class="archive__newsletter" ref="parse">
				
			</section>
		</transition>
		<section padding class="archive__dropdown" v-if="errorLoad">
			<p>Error al cargar las newsletters</p>
			<span class="text-underline" v-if="errorLoad" @click="retryGetNewsletters">Recargar</span>
		</section>
		<select class="archive__dropdown dropdown"
			v-model="campaignSelected"
			@change="change"
			v-if="!errorLoad"
		>
			<option v-for="(campaign, index) in campaigns" :key="index" :value="campaign">
				{{ campaign.subject }}
			</option>
		</select>
		<subscribe-popup v-if="isPopupVisibled" @close="isPopupVisibled = $event"></subscribe-popup>
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
			campaignSelected: null,
			isPopupVisibled: true,
			errorLoad: false,
		};
	},
	mounted() {
		this.getNewsletters();
	},
	methods: {
		change($event) {
			this.$refs.parse.style.opacity = 0;
			this.$nextTick(() => {
				setTimeout(() => {
					this.$refs.parse.style.visibility = 'hidden';
					this.$refs.parse.innerHTML = this.campaignSelected.htmlContent;
					this.$refs.parse.style.visibility = 'visible';
					this.$refs.parse.style.opacity = 1;
				}, 1000);
			});
		},
		getNewsletters() {
			axios
			.get(`${process.env.URL}:${process.env.PORT}/emailCampaigns`, {
				headers: {
					accept: 'application/json',
				},
			})
			.then((response) => {
				this.campaigns = JSON.parse(response.data.body).campaigns;
				if (this.campaigns.length > 0) {
					this.campaignSelected = this.campaigns[0];
					this.$refs.parse.innerHTML = this.campaignSelected.htmlContent;
				}
				// this.$refs.parse.innerHTML = campaigns[0].htmlContent;
				this.errorLoad = false;
			})
			.catch((error) => {
				console.error(error);
				this.errorLoad = true;
			});
		},
		retryGetNewsletters() {
			this.errorLoad = false;
			setTimeout(() => {
				this.getNewsletters();
			}, 2000);
		}
	},
};
</script>
