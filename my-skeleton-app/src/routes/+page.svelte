<script lang="ts">
	import ProductsGrid from '$lib/components/ProductsGrid.svelte';
	import { Product } from '$lib/products';
	import axios from 'axios';

	let products: Product[] = [];

	initProducts();

	async function initProducts() {
		const tempProducts = await getProductsFromServer();
		products = tempProducts ?? [];
	}

	async function getProductsFromServer(): Promise<Product[] | undefined> {
		try {
			const response = await axios.get('products');

			const products: Product[] = [];
			for (let i = 0; i < response.data.length; i++) {
				const product = new Product(response.data[i]);
				products.push(product);
			}

			return products;
		} catch (error: any) {
			console.log('Error fetching products', error);
		}
	}
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<div>
	<div><h1>Fresh Food</h1></div>
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			<ProductsGrid {products} />
		</div>
	</div>
</div>

<style lang="postcss">
</style>
