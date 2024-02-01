<script lang="ts">
	import type { Product } from '$lib/products';
	import ProductCard from './ProductCard.svelte';

	export let products: Product[];
</script>

<div>
	<div class="flex flex-rows flex-wrap gap-5">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>
