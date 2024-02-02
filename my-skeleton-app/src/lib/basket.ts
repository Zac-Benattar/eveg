import { derived, writable } from 'svelte/store';
import { Product } from './products';

export const basketStore = writable<BasketItem[]>([]);

export const basketPriceStore = derived(basketStore, ($basket) => {
	let cost: number = 0;
	$basket.forEach((item) => {
		cost += item.product.getPrice() * item.quantity;
	});
	return cost;
});

export const basketPriceStringStore = derived(
	basketPriceStore,
	($price) => `£${($price / 100).toFixed(2)}`
);

export type BasketItem = {
	product: Product;
	quantity: number;
};

export function addToBasket(product: Product, quantity: number): void {
	basketStore.update((items) => {
		const existing = items.find((basketItem) => basketItem.product.getProductTitle() === product.getProductTitle());
		if (existing) {
			existing.quantity += quantity;
			return [...items];
		} else {
			return [
				...items,
				{
					product: product,
					quantity: quantity
				}
			];
		}
	});
}

export function removeFromBasket(product: Product) {
	basketStore.update((items) => {
		const existing = items.find(
			(basketItem) => basketItem.product.getProductID() === product.getProductID()
		);
		if (existing && existing.quantity > 1) {
			existing.quantity--;
			return [...items];
		} else {
			return items.filter(
				(basketItem) => basketItem.product.getProductID() !== product.getProductID()
			);
		}
	});
}

export function clearBasket() {
	basketStore.set([]);
}
