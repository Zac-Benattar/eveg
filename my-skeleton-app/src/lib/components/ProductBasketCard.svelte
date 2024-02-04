<script lang="ts">
	import {
		addToBasket,
		removeOneFromBasket,
		type BasketItem,
		functionRemoveAllOfProductFromBasket
	} from '$lib/basket';

	export let basketItem: BasketItem;

	function onIncrement() {
		addToBasket(basketItem.product, 1);
	}

	function onDecrement() {
		addToBasket(basketItem.product, -1);
	}

	function onRemove() {
		functionRemoveAllOfProductFromBasket(basketItem.product);
	}

	$: basketItem.quantity = Math.min(Math.max(1, basketItem.quantity), 20);
</script>

<div class="card w-full md:w-60 flex flex-col p-2 gap-2">
	<div class="flex flex-row flex-nowrap place-content-evenly">
		<div class="h4 grow-0">{basketItem.product.getProductTitle()}</div>
		<button
			type="button"
			class="btn-icon variant-filled shrink-0 place-self-end"
			on:click={onRemove}>x</button
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
				>+</button
			>
			<button type="button" class="btn-icon variant-filled shrink-0" on:click={onDecrement}
				>-</button
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
