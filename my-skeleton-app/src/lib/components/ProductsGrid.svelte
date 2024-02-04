<script lang="ts">
	import type { Product } from '$lib/products';
	import ProductCard from './ProductCard.svelte';

	export let products: Product[] = [];
</script>

<div class="w-full flex flex-row flex-wrap md:grid md:grid-cols-4 gap-4 place-content-center">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>
