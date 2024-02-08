<script lang="ts">
	import { Product, productsStore } from '$lib/products';
	import { addToBasket } from '$lib/basket';
	import NutritionInfoBox from '$lib/components/NutritionInfoBox.svelte';
	import { page } from '$app/stores';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	function goHome(): void {
		goto('/');
	}

	let id = $page.params.id;

	export let product: Product;

	let productList: Product[] = [];
	productsStore.subscribe((value) => {
		if (value != undefined) productList = value;
	});

	$: {
		if (productList.length > 0) {
			const tempProduct = productList.find((p) => p.getProductID() == parseInt(id));
			if (tempProduct != undefined) product = tempProduct;
		}
	}

	// For testing purposes, remove when connecting to url param
	product = new Product({
		name: 'Apples',
		category: 'fruit',
		image: 'matheus-cenali-wXuzS9xR49M-unsplash.jpg',
		packsize: 6,
		units: 'unit',
		price: 225,
		productID: 2
	});

	let quantity: string = '1';

	function onAddToBasket() {
		addToBasket(product, parseInt(quantity));
	}

	const nutritionInfoNums: number[] = [];
	nutritionInfoNums[0] = Math.round(Math.random() * 500);
	nutritionInfoNums[1] = Math.round(Math.random() * 150) / 10;
	nutritionInfoNums[2] = Math.round(Math.random() * 50) / 10;
	nutritionInfoNums[3] = Math.round(Math.random() * 40) / 10;
	nutritionInfoNums[4] = Math.round(Math.random() * 30) / 10;
</script>

<div class="flex flex-row place-content-center">
	<div
		class="sm:w-10/12 lg:w-5/12 flex flex-col sm:flex-row sm:gap-5 place-content-start p-5 sm:flex-wrap"
	>
		<button class="btn btn-md variant-filled w-36 h-12" on:click={goHome}>
			<span>
				<ArrowLeftOutline size="xl" />
			</span>
			<span>Home</span>
		</button>

		<div class="flex flex-row">
			<div class="w-full flex flex-col p-2 gap-5 place-content-center">
				<div class="h4 grow-0">{product.getProductTitle()}</div>
				<div class="image-container">
					<div class="flex">
						<img class="rounded-lg" src={product.getImageSrc()} alt="" />
					</div>
				</div>
				<div class="flex flex-row content-evenly gap-2">
					<div class="h4">{product.getPriceString()}</div>
					<div class="h6 place-self-end">{product.getPricePerUnitString()}</div>
				</div>
				<div>
					<NutritionInfoBox
						nutritionInfo={nutritionInfoNums}
						packsize={product.getPacksize()}
						units={product.getUnits()}
					/>
				</div>
				<div class="flex flex-row place-content-center">
					<div class="w-8/12 flex flex-row gap-2 place-content-evenly">
						<select class="select" bind:value={quantity}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>

						<button type="button" class="btn variant-filled" on:click={onAddToBasket}
							>Add to basket</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	img {
		width: 300px;
		height: 300px;
		object-fit: cover;
	}
</style>
