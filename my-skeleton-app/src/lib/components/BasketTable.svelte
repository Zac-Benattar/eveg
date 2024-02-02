<script lang="ts">
	import {  basketStore, type BasketItem, basketPriceStringStore } from '$lib/basket';
	import { Table } from '@skeletonlabs/skeleton';
	import type { Tab, TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';

	let basket: BasketItem[] = [];
	let basketPriceString: string = '£0.00';
	let tableSource: TableSource;

	// Source Data
	basketStore.subscribe((value) => {
		basket = value;
	});

	basketPriceStringStore.subscribe((value) => {
		basketPriceString = value;
	});

	function setTableSource(): TableSource {
		return {
			head: ['Name', 'Cost per unit', 'Quantity'],
			body: tableMapperValues(basket, ['title', 'price', 'quantity']),
			meta: tableMapperValues(basket, ['title']),
			foot: ['Total Elements', '', `<span class="badge variant-soft-primary">${basketPriceString}</span>`]
		};
	}

	function removeItemFromBasket(e: CustomEvent<string[]>) {
		console.log(e.detail);
		basketStore.update((value) => {
			const index = value.findIndex((basketItem) => basketItem.title === e.detail[0]);
			value.splice(index, 1);
			return value;
		});
	}

	// If sourceData updates, set the new TableSource values
	$: tableSource = basket ? setTableSource() : undefined;
</script>

<div>
	<Table source={tableSource} interactive={true} on:selected={removeItemFromBasket} />
</div>
