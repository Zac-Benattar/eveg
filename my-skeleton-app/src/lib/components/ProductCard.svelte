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

<div class="card flex flex-col p-3 m-2 h-100 gap-2 justify-center">
	<div class="h4 grow-0">{product.getProductTitle()}</div>
	<div class="image-container">
		<div class="flex justify-center">
			<img class="rounded-lg" src={product.getImageSrc()} alt="" />
		</div>
	</div>
	<div class="flex flex-row justify-center content-evenly gap-2">
		<div class="h4">{product.getPriceString()}</div>
		<div class="h4">{product.getPricePerUnitString()}</div>
	</div>
	<div class="flex flex-row justify-center content-evenly gap-2">
		<div class="grow">
			<select class="select" id={quantitySelectId}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
		</div>

		<div class="grow">
			<button type="button" class="btn variant-filled" on:click={onAddToBasket}>Add</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		width: 200px;
		height: 300px;
	}

	img {
		width: 150px;
		height: 150px;
		object-fit: cover;
	}
</style>
