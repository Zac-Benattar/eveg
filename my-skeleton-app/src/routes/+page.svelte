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

<div class="flex flex-col p-3">
	<div class="h2 flex flex-row place-content-center">Fresh Food</div>
	<div class="flex flex-row p-2 gap-x-5 flex-wrap-reverse">
		<label class="label p-2">
			<span>Filter by:</span>
			<div class="flex flex-row flex-wrap gap-2">
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
		</label>
		<label class="label p-2">
			<span>Sort by:</span>
			<select class="select" id="sort-by">
				<option value="1">Alphabetical</option>
				<option value="2">Category</option>
				<option value="3">Price High to Low</option>
				<option value="4">Price Low to High</option>
			</select>
		</label>
	</div>

	<div class="container h-full mx-auto flex justify-center items-center p-2">
		<div class="space-y-10 text-center flex flex-col items-center">
			<ProductsGrid products={productList} />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
