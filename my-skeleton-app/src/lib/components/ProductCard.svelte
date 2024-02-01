<script lang="ts">
	import type { Product } from '$lib/products';

	export let product: Product;
</script>

<div class="card">
	<div class="flex flex-col">
		<div class="h2">{product.name} {product.packsize} {product.units}</div>
		<div class="flex flex-col">
			<div id="image-container">
				<div>
					<img class="h-auto max-w-full rounded-lg" src={product.image} alt="" />
				</div>
			</div>
			<div class="grid">
				<div class="h3">{product.price}</div>
			</div>
			<div class="flex flex-col">
				<select class="select">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<button type="button" class="btn variant-filled">Add</button>
			</div>
		</div>
	</div>
</div>
