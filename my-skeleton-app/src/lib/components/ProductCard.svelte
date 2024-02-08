<script lang="ts">
	import type { Product } from '$lib/products';
	import { addToBasket } from '$lib/basket';

	export let product: Product;

	let quantity: string = '1';

	function onAddToBasket() {
		addToBasket(product, parseInt(quantity));
	}
</script>

<div class="card w-full sm:w-60 flex flex-col p-5 gap-2">
	<div class="image-container">
		<div class="flex justify-center">
			<img class="rounded-lg" src={product.getImageSrc()} alt="" />
		</div>
	</div>
	
	<a
		href="/product/{product.getProductID()}"
		class="btn grow-0 text-blue-700"
		data-sveltekit-preload-data="hover"><div class="h2 sm:h4">{product.getProductTitle()}</div></a
	>

	<div class="flex flex-row justify-center content-evenly gap-2">
		<div class="h3 sm:h4">{product.getPriceString()}</div>
		<div class="h5 sm:h6 place-self-end">{product.getPricePerUnitString()}</div>
	</div>

	<div class="flex flex-row justify-center">
		<div class="w-6/12 md:w-9/12 flex flex-row gap-2 place-content-evenly">
			<select class="select" bind:value={quantity}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>

			<button type="button" class="btn variant-filled" on:click={onAddToBasket}>Add</button>
		</div>
	</div>
</div>

<style lang="postcss">
	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
	}
</style>
