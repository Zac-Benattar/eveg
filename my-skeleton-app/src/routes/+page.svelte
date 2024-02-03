<script lang="ts">
	import ProductsGrid from '$lib/components/ProductsGrid.svelte';
	import { initProducts, filteredProductsStore, Product, filterStore } from '$lib/products';

	initProducts();

	let productList: Product[] = [];

	filteredProductsStore.subscribe((value) => {
		productList = value;
	});

	let categories: Record<string, boolean> = {
		veg: true,
		fruit: true,
		dairy: true,
		other: true
	};

	function toggle(flavor: string): void {
		categories[flavor] = !categories[flavor];
		filterStore.set(categories);
	}
</script>

<div class="flex flex-col p-2">
	<div class="h2"><h1>Fresh Food</h1></div>
	<div class="flex flex-row gap-2">
		{#each Object.keys(categories) as f}
			<button
				class="chip {categories[f] ? 'variant-filled' : 'variant-soft'}"
				on:click={() => {
					toggle(f);
				}}
				on:keypress
			>
				{#if categories[f]}<span>✔️</span>{/if}
				<span class="capitalize">{f}</span>
			</button>
		{/each}
	</div>
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<ProductsGrid products={productList} />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
