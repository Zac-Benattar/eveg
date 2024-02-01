import { writable } from 'svelte/store';
import { Product } from './products';

export const basketStore = writable<BasketItem[]>([]);

export type BasketItem = Product & { quantity: number };

export function addToBasket(product: Product, quantity: number) {
	basketStore.update((items) => {
		const existing = items.find((item) => item.productID === product.productID);
		if (existing) {
			existing.quantity += quantity;
			return [...items];
		} else {
			return [...items, { ...product, quantity }];
		}
	});
}

export function removeFromBasket(product: Product) {
	basketStore.update((items) => {
		const existing = items.find((item) => item.productID === product.productID);
		if (existing && existing.quantity > 1) {
			existing.quantity--;
			return [...items];
		} else {
			return items.filter((item) => item.productID !== product.productID);
		}
	});
}

export function clearBasket() {
	basketStore.set([]);
}
