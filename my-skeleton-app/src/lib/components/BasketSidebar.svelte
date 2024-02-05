<script lang="ts">
	import { type BasketItem, basketStore, basketPriceStringStore } from '$lib/basket';

	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import BasketSidebarCard from './BasketSidebarCard.svelte';

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
		<div class="flex flex-col p-4">
			<div class="h3 flex flex-row p-2">Basket</div>
			{#if basket.length === 0}
				<p class="p-2">Your basket is empty</p>
			{:else}
				<ul class="list mr-7">
					{#each basket as item}
						<BasketSidebarCard basketItem={item}/>
					{/each}
				</ul>
				<div class="grow">
					<div class="h4 p-2">Total: {basketCost}</div>
				</div>
				<div class="grow p-2">
					<a
						href="/checkout"
						class="btn variant-filled"
						data-sveltekit-preload-data="hover"
						on:click={drawerClose}>Checkout</a
					>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.sidebar {
		width: 300px;
	}
</style>
