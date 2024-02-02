<script lang="ts">
	import ProductsGrid from '$lib/components/ProductsGrid.svelte';
	import { initProducts, filteredProductsStore, Product } from '$lib/products';

	initProducts();

	let productList: Product[] = [];

	filteredProductsStore.subscribe((value) => {
		productList = value;
	});
</script>

<<<<<<< Updated upstream
<div>
	<div><h1>Fresh Food</h1></div>
=======
<div class="flex flex-col p-5">
	<div class="flex flex-row place-content-center"><div class="h2">Fresh Food</div></div>
	<div class="flex flex-row place-content-center gap-8 p-3">
		<label class="label">
			<span>Filters</span>
			<div class="flex flex-row gap-2">
				{#each Object.keys(categories) as f}
					<button
						class="chip {categories[f] ? 'variant-filled bg-surface-500' : 'variant-soft'}"
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
		<div>
			<label class="label">
				<span>Sort by:</span>
				<select class="select" id="sort-by">
					<option value="1">Alphabetical</option>
					<option value="2">Category</option>
					<option value="3">Price High to Low</option>
					<option value="4">Price Low to High</option>
				</select>
			</label>
		</div>
	</div>

>>>>>>> Stashed changes
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<ProductsGrid products={productList} />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
