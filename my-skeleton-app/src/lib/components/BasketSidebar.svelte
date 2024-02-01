<script lang="ts">
	import { type BasketItem, basketStore } from '$lib/basket';

	let basket: BasketItem[] = [];

	basketStore.subscribe((value) => {
		basket = value;
	});
</script>

<div class="flex flex-col">
	<div>
		<h2>Basket</h2>
		<div>
			<ul class="list">
				{#each basket as item}
					<li>
						<span>{item.name}</span>
						<span>{item.quantity}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
