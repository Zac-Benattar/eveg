<script lang="ts">
	import { addToBasket, type BasketItem, removeAllOfProductFromBasket } from '$lib/basket';

	export let basketItem: BasketItem;

	function onIncrement() {
		addToBasket(basketItem.product, 1);
	}

	function onDecrement() {
		addToBasket(basketItem.product, -1);
	}

	function onRemove() {
		removeAllOfProductFromBasket(basketItem.product);
	}

	$: {
		if (basketItem.quantity > 0) {
			basketItem.quantity = Math.min(basketItem.quantity, 20);
		} else {
			removeAllOfProductFromBasket(basketItem.product);
		}
	}
</script>

<div class="card w-full md:w-60 flex flex-col p-2 gap-2">
	<div class="grid grid-cols-4">
		<div></div>
		<div class="h4 col-span-2 flex flex-row place-content-center">
			{basketItem.product.getProductTitle()}
		</div>
		<button
			type="button"
			class="btn-icon variant-filled shrink-0 justify-self-end"
			on:click={onRemove}><span>x</span></button
		>
	</div>

	<div class="image-container">
		<div class="flex justify-center">
			<img class="rounded-lg" src={basketItem.product.getImageSrc()} alt="" />
		</div>
	</div>
	<div class="flex flex-row justify-center content-evenly gap-2">
		<div class="h4">{basketItem.product.getPriceString()}</div>
		<div class="h6 place-self-end">{basketItem.product.getPricePerUnitString()}</div>
	</div>
	<div class="flex flex-row justify-center">
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
				><span class="text-3xl">+</span></button
			>
			<button type="button" class="btn-icon variant-filled shrink-0" on:click={onDecrement}
				><span class="text-5xl text-b mb-2">-</span></button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	img {
		width: 150px;
		height: 150px;
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
