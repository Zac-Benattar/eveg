<script lang="ts">
	import { addToBasket, removeAllOfProductFromBasket, type BasketItem } from '$lib/basket';

	export let basketItem: BasketItem;

	function onIncrement() {
		addToBasket(basketItem.product, 1);
	}

	function onDecrement() {
		addToBasket(basketItem.product, -1);
	}

	$: {
		if (basketItem.quantity > 0) {
			basketItem.quantity = Math.min(basketItem.quantity, 20);
		} else {
			removeAllOfProductFromBasket(basketItem.product);
		}
	}
</script>

<li class="p-1 flex flex-col w-full">
	<div class="p-1 flex flex-row w-full gap-2">
		<div class="flex justify-center">
			<img
				class="rounded-lg"
				src={basketItem.product.getImageSrc()}
				alt="{basketItem}.product.getProductName()}"
			/>
		</div>
		<span class="w-9/12">{basketItem.product.getProductTitle()}</span>
	</div>
	<div class="p-1 flex flex-row w-full">
		<div class="w-9/12 md:w-9/12 flex flex-row gap-2 place-content-evenly">
			<input
				class="input"
				title="Quantity"
				type="number"
				min="1"
				max="20"
				bind:value={basketItem.quantity}
			/>
			<button type="button" class="btn-icon variant-filled shrink-0" on:click={onIncrement}
				>+</button
			>
			<button type="button" class="btn-icon variant-filled shrink-0" on:click={onDecrement}
				>-</button
			>
		</div>
	</div>
</li>

<style lang="postcss">
	img {
		width: 50px;
		height: 50px;
		object-fit: cover;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
