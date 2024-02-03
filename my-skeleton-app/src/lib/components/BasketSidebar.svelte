<script lang="ts">
	import { type BasketItem, basketStore, basketPriceStringStore } from '$lib/basket';

	import { getDrawerStore } from '@skeletonlabs/skeleton';

	let basket: BasketItem[] = [];
	let basketCost: string = '£0.00';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	basketStore.subscribe((value) => {
		basket = value;
	});

	basketPriceStringStore.subscribe((value) => {
		basketCost = value;
	});
</script>

<div class="sidebar flex flex-col">
	<div>
		<div class="flex flex-col p-2 gap-3">
			<h2>Basket</h2>
			<ul class="list">
				{#each basket as item}
					<li>
						<div class="flex justify-center">
							<img class="rounded-lg" src={item.product.getImageSrc()} alt="" />
						</div>
						<span>{item.product.getProductTitle()}</span>
						<span>x{item.quantity}</span>
					</li>
				{/each}
			</ul>
			<div class="grow">
				<h3>Total: {basketCost}</h3>
			</div>
			<div class="grow">
				<a href="/checkout" class="btn variant-filled" data-sveltekit-preload-data="hover"
					on:click={drawerClose}>Checkout</a
				>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	img {
		width: 50px;
		height: 50px;
		object-fit: cover;
	}

	.sidebar {
		width: 300px;
	}
</style>
