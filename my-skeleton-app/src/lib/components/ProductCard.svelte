<script lang="ts">
	import type { Product } from '$lib/products';
	import { addToBasket } from '$lib/basket';

	export let product: Product;

	const componentId: string = product.getProductID().toString();
	const quantitySelectId: string = `quantity-select-${componentId}`;

	function onAddToBasket() {
		// Find the quantity select element
		const quantitySelect = document.getElementById(quantitySelectId) as HTMLSelectElement;

		// Get the quantity value
		const quantity = parseInt(quantitySelect.value);

		// Add the product to the basket store
		addToBasket(product, quantity);
	}
</script>

<div class="card w-full md:w-60 flex flex-col p-2 gap-2">
	<div class="h4 grow-0">{product.getProductTitle()}</div>
	<div class="image-container">
		<div class="flex justify-center">
			<img class="rounded-lg" src={product.getImageSrc()} alt="" />
		</div>
	</div>
	<div class="flex flex-row justify-center content-evenly gap-2">
		<div class="h4">{product.getPriceString()}</div>
		<div class="h6 place-self-end">{product.getPricePerUnitString()}</div>
	</div>
	<div class="flex flex-row justify-center">
		<div class="w-6/12 md:w-9/12 flex flex-row">
			<div class="grow">
				<select class="select" id={quantitySelectId}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			<div class="grow flex flex-row place-content-end">
				<button type="button" class="btn variant-filled" on:click={onAddToBasket}>Add</button>
			</div>
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
