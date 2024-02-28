import axios from 'axios';
import { derived, writable } from 'svelte/store';

export type ProductData = {
	name: string;
	category: string;
	image: string;
	packsize: number;
	units: string;
	price: number;
	productID: number;
};

export class Product {
	private name: string;
	private category: string;
	private image: string;
	private packsize: number;
	private units: string;
	private price: number;
	private productID: number;

	constructor(productData: ProductData) {
		this.name = productData.name;
		this.category = productData.category;
		this.image = new URL(productData.image, import.meta.url).href;
		this.packsize = productData.packsize;
		this.units = productData.units;
		this.price = productData.price;
		this.productID = productData.productID;
	}

	public getProductName(): string {
		return this.name;
	}

	public getProductTitle(): string {
		let packSize: string = '';
		// Deal with outliers first
		if (this.name === 'Eggs') {
			packSize = this.packsize.toString() + ' Pack';
		} else if (this.units === 'unit') {
			if (this.packsize === 1) packSize = 'Each';
			else packSize = this.packsize.toString() + ' Pack';
		} else if (this.units === 'pint') {
			packSize = ' Pint';
		} else if (this.units === 'bag') {
			packSize = this.packsize.toString() + ' Bags';
		} else {
			if (this.packsize > 1000) {
				if (this.units === 'g') packSize = `${this.packsize / 1000}kg`;
				else if (this.units === 'ml') packSize = `${this.packsize / 1000}L`;
			} else {
				packSize = `${this.packsize}${this.units}`;
			}
		}
		return `${this.name} ${packSize}`;
	}

	public getImageSrc(): string {
		return this.image;
	}

	public getProductID(): number {
		return this.productID;
	}

	public getPrice(): number {
		return this.price;
	}

	public getPacksize(): number {
		return this.packsize;
	}

	public getCategory(): string {
		return this.category;
	}

	public getUnits(): string {
		return this.units;
	}

	public getPriceString(): string {
		const price: number = this.price / 100;

		return `£${price.toFixed(2)}`;
	}

	public getPricePerUnitString(): string {
		let unit: string;
		let multiplier: number = 1;
		if (this.units === 'unit') {
			unit = ' each';
		} else if (this.units === 'g') {
			unit = '/kg';
			multiplier = 1000;
		} else if (this.units === 'pint') {
			unit = '/litre';
			multiplier = 2.27305;
		} else {
			unit = `/${this.units}`;
		}

		return `£${((this.price / 100 / this.packsize) * multiplier).toFixed(2)}${unit}`;
	}
}

const categories: Record<string, boolean> = {
	veg: true,
	fruit: true,
	dairy: true,
	other: true
};

export const productsStore = writable<Product[]>();
export const searchTermStore = writable<string>('');
export const filterStore = writable<Record<string, boolean>>(categories);
export const sortMethodStore = writable<string>('Alphabetical');
export const filteredProductsStore = derived(
	[productsStore, searchTermStore, filterStore, sortMethodStore],
	([$products, $searchTerm, $filters, $sortMethod]) => {
		if (!$products) return [];

		const filteredProducts = $products.filter((product) => {
			return (
				product.getProductTitle().toLowerCase().includes($searchTerm.toLowerCase()) &&
				$filters[product.getCategory()]
			);
		});

		if ($sortMethod == 'Alphabetical') {
			return filteredProducts.sort();
		} else if ($sortMethod == 'Price Low to High') {
			return filteredProducts.sort((a, b) => a.getPrice() - b.getPrice());
		} else if ($sortMethod == 'Price High to Low') {
			return filteredProducts.sort((a, b) => b.getPrice() - a.getPrice());
		} else if ($sortMethod == 'Category') {
			return filteredProducts.sort(
				(a, b) => a.getCategory().charCodeAt(0) - b.getCategory().charCodeAt(0)
			);
		}
	}
);

export async function initProducts() {
	const tempProducts = await getProductsFromServer();
	if (tempProducts) productsStore.set(tempProducts);
}

async function getProductsFromServer(): Promise<Product[] | undefined> {
	try {
		const response = await axios.get('products');

		const products: Product[] = [];
		for (let i = 0; i < response.data.length; i++) {
			const product = new Product({ ...response.data[i], productID: i });
			products.push(product);
		}

		return products;
	} catch (error) {
		console.log('Error fetching products', error);
	}
}
