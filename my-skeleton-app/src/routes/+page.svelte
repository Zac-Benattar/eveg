<script lang="ts">
	import ProductsGrid from '$lib/components/ProductsGrid.svelte';
	import { initProducts, filteredProducts, Product } from '$lib/products';

	initProducts();

	let productList: Product[] = [];

	filteredProducts.subscribe((value) => {
		productList = value;
	});
</script>

<div>
	<div><h1>Fresh Food</h1></div>
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<ProductsGrid products={productList} />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
