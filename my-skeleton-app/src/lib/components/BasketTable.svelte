<script lang="ts">
	import {  basketStore, type BasketItem, basketPriceStringStore } from '$lib/basket';
	import { Table } from '@skeletonlabs/skeleton';
	import type { Tab, TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';

	let basketTableData: BasketTableItem[] = [];
	let basketPriceString: string = '£0.00';
	let tableSource: TableSource;

	type BasketTableItem = {
		title: string;
		pricePerUnit: string;
		quantity: string;
		totalPrice: string;
	}

	// Source Data
	basketStore.subscribe((value) => {
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			const basketItem = {
				title: item.product.getProductTitle(),
				pricePerUnit: item.product.getPriceString(),
				quantity: item.quantity.toString(),
				totalPrice: `£${(item.product.getPrice() * item.quantity / 100).toFixed(2)}`
			}
			basketTableData.push(basketItem);
		}
	});

	basketPriceStringStore.subscribe((value) => {
		basketPriceString = value;
	});

	function setTableSource(): TableSource {
		return {
			head: ['Name', 'Cost per unit', 'Quantity', 'Total'],
			body: tableMapperValues(basketTableData, ['title', 'pricePerUnit', 'quantity', 'totalPrice']),
			meta: tableMapperValues(basketTableData, ['title']),
			foot: ['Total', '', '', `<span class="badge variant-soft-primary">${basketPriceString}</span>`]
		};
	}

	function removeItemFromBasket(e: CustomEvent<string[]>) {
		console.log(e.detail);
		basketStore.update((value) => {
			const index = value.findIndex((basketItem) => basketItem.product.getProductTitle() === e.detail[0]);
			value.splice(index, 1);
			return value;
		});
	}

	// If sourceData updates, set the new TableSource values
	$: tableSource = basketTableData ? setTableSource() : undefined;
</script>

<div>
	<Table source={tableSource} interactive={true} on:selected={removeItemFromBasket} />
</div>
