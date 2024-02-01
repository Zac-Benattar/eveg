<script lang="ts">
	import type { Product } from '$lib/products';
	import ProductCard from './ProductCard.svelte';

    export let products: Product[];
</script>

<div>
	<div class="productList">
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
	</div>
</div>
