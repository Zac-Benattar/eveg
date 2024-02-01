import { derived, writable } from 'svelte/store';
import { Product } from './products';

export const basketStore = writable<BasketItem[]>([]);

export const basketPriceStore = derived(basketStore, ($basket) => {
	let cost: number = 0;
	$basket.forEach((item) => {
		cost += item.price * item.quantity;
	});
	return cost;
});

export const basketPriceStringStore = derived(
	basketPriceStore,
	($price) => `£${($price / 100).toFixed(2)}`
);

export type BasketItem = {
	title: string;
	image: string;
	price: number;
	priceString: string;
	packsize: number;
	units: string;
	productID: number;
	quantity: number;
};

export function addToBasket(product: Product, quantity: number) {
	basketStore.update((items) => {
		const existing = items.find((basketItem) => basketItem.title === product.getProductTitle());
		if (existing) {
			existing.quantity += quantity;
			return [...items];
		} else {
			return [
				...items,
				{
					title: product.getProductTitle(),
					image: product.getImageSrc(),
					price: product.getPrice(),
					priceString: product.getPriceString(),
					packsize: product.getPacksize(),
					units: product.getUnits(),
					productID: product.getProductID(),
					quantity: quantity
				}
			];
		}
	});
}

export function removeFromBasket(product: Product) {
	basketStore.update((items) => {
		const existing = items.find(
			(basketItem) => basketItem.productID === product.getProductID()
		);
		if (existing && existing.quantity > 1) {
			existing.quantity--;
			return [...items];
		} else {
			return items.filter(
				(basketItem) => basketItem.productID !== product.getProductID()
			);
		}
	});
}

export function clearBasket() {
	basketStore.set([]);
}
