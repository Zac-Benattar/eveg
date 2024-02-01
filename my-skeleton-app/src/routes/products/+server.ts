import { loadProducts } from '$lib/products.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(loadProducts());
}
