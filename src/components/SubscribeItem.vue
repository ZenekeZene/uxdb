<template>
	<section>
		<!--<input type="email" placeholder="Enter your email" />
		<button class="btn">
		<img src="../assets/images/icon-enter.svg" />
		</button>-->
		<form
			id="sib-form"
			method="POST"
			action="https://sibforms.com/serve/MUIEAELiF6BjbZdvHSHk7gods9xwxQVCmLQzVNTXRe9oeGk6VWM-_xlArPUXU8ZorRQxzTxHVisnYkWSUbgAnnJdmWgpTX2mY5cEPA2Twi5ym4Tvgbrf0LXvGQVVtWjgqevfyKOZ7lf97LhZZC1BLJr2_gqe5jKrHI8V0ApPki0szOZopYF0kXrJKNhMPD6bCRLO42HUQhDYjYB5"
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
