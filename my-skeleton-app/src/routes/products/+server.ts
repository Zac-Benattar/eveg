import { json } from '@sveltejs/kit';
import productData from '../../lib/assets/data/products.json';

export async function GET() {
	return json(productData);
}
