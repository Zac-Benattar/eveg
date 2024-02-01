<script lang="ts">
	import type { Product } from '$lib/products';
	import { addToBasket } from '$lib/basket';

	export let product: Product;

    const componentId: string = product.productID.toString();
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

<div class="card">
	<div class="flex flex-col">
		<div class="h2">{product.name} {product.packsize} {product.units}</div>
		<div class="flex flex-col">
			<div id="image-container">
				<div>
					<img class="h-auto max-w-full rounded-lg" src={product.image} alt="" />
				</div>
			</div>
			<div class="grid">
				<div class="h3">{product.price}</div>
			</div>
			<div class="flex flex-col">
				<select class="select" id={quantitySelectId}>
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
</div>

<style lang="postcss">
	.card {
		width: 200px;
		height: 300px;
	}
</style>
