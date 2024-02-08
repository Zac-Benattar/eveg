<script lang="ts">
	import { clearBasket, type BasketItem } from '$lib/basket';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import ProductBasketCard from './ProductBasketCard.svelte';

	export let basketItems: BasketItem[] = [];
	export let basketPriceString: string = '';

	function onClearBasket() {
		clearBasket();
	}
</script>

<div class="card flex flex-col p-3">
	<div class="h3 p-2">Basket Summary</div>
	<div class="flex flex-row place-content-center"><hr class="w-11/12" /></div>
	<div class="h4 p-2">Total: {basketPriceString}</div>
	<div class="flex flex-row place-content-center"><hr class="w-11/12" /></div>
	{#if basketItems.length === 0}
		<div class="p-2">Your basket is empty</div>
	{:else}
		<!-- Fix spacing on the left -->
		<TreeView hyphenOpacity="opacity-0" indent="ml-0">
			<TreeViewItem indent="ml-0">
				<div class="h4">Contents</div>
				<svelte:fragment slot="children">
					<TreeViewItem>
						<div class="w-full flex flex-row flex-wrap gap-4 place-content-center">
							{#each basketItems as basketItem}
								<ProductBasketCard {basketItem} />
							{/each}
						</div>
					</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
		</TreeView>
		<button class="btn variant-filled w-5/12 md:w-4/12" on:click={onClearBasket}
			>Clear Basket</button
		>
	{/if}
</div>
