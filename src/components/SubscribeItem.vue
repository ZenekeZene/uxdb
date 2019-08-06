<template>
	<section>
		<!--<input type="email" placeholder="Enter your email" />
		<button class="btn">
		<img src="../assets/images/icon-enter.svg" />
		</button>-->
		<form
			id="sib-form"
			method="POST"
			action="https://sibforms.com/serve/MUIEAPNdyY5siFVPr5nhFHw2T0ri-qz4_sYvRSm_YHG4vF8YQf6x60wkkq3-sGQ-BmV-PSbD7Harz5-_q5lsyZs5l6IIHNtly30FFuSvBq8U7htF4yZLtfpezd47hrBlf1voZRC46Z_IRg0C17xkcL-v5To0qbQDiG_J1Y9UTjsxDLK3VPb5w_r7cY1y3VNkmcpjQUIwFb4o5p2T"
			class="subscribe"
		>
			<input
				class="input"
				maxlength="200"
				type="email"
				id="EMAIL"
				name="EMAIL"
				autocomplete="off"
				data-required="true"
				placeholder="Enter your email"
				required
			/>
			<button class="btn" form="sib-form" type="submit">
				<img src="../assets/images/icon-enter.svg" />
			</button>
			<div class="sib-loader" style="display: none;">
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
				<div style="background: #3E4857;"></div>
			</div>
			<input type="text" name="email_address_check" value class="input--hidden" />
			<input type="hidden" name="locale" value="es" />
			<input type="hidden" name="html_type" value="simple" />
		</form>
	</section>
</template>
<script>
export default {
	name: 'SubscribeItem',
};
</script>
<style>
.sib-form {
    width: 100%;
    background-color: transparent !important;
}

#sib-container {
    max-width: unset !important;
    padding: 0 !important;
    background-color: transparent !important;
    border: none !important;
}
</style>
