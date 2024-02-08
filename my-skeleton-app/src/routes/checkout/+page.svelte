<script lang="ts">
	import Basket from '$lib/components/Basket.svelte';

	import { basketStore, type BasketItem, basketPriceStringStore } from '$lib/basket';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	let basketItems: BasketItem[] = [];
	let basketPriceString: string = '';

	basketStore.subscribe((value) => {
		basketItems = value;
	});

	basketPriceStringStore.subscribe((value) => {
		basketPriceString = value;
	});

	function goHome(): void {
		goto('/');
	}
</script>

<div class="flex flex-row place-content-center">
	<div class="sm:w-10/12 lg:w-8/12 flex flex-col place-content-center p-2">
		<div class="flex p-4">
			<button class="btn btn-md variant-filled w-36" on:click={goHome}>
				<span>
					<ArrowLeftOutline size="xl" />
				</span>
				<span>Home</span>
			</button>
		</div>
		<div class="p-2 flex flex-row flex-wrap gap-5">
			<div id="basket" class="flex flex-col p-2 gap-2 w-full sm:w-7/12">
				<div class="h3">Basket</div>
				<Basket {basketItems} {basketPriceString} />
			</div>

			<div id="customerDetails" class="flex flex-col p-2 gap-2 w-full sm:w-4/12">
				<div class="h3">Delivery Details</div>

				<form class="customerDetails" action="creditcard">
					<div class="flex flex-col grow-0 gap-y-3 w-70">
						<label class="label">
							<span>Name:</span>
							<input class="input" type="text" placeholder="John Smith" />
						</label>
						<label class="label">
							<span>Email:</span>
							<input
								class="input"
								title="Input (email)"
								type="email"
								placeholder="john@example.com"
								autocomplete="email"
							/>
						</label>
						<label class="label">
							<span>Contact Number:</span>
							<input class="input" title="Input (tel)" type="tel" placeholder="+44 123 456 789" />
						</label>
						<label class="label">
							<span>Delivery Address:</span>
							<input class="input" type="text" placeholder="16 Test Road, Testington, TE57 1NG" />
						</label>
						<a
							href="/creditcard"
							class="btn variant-filled mt-2"
							data-sveltekit-preload-data="hover">Pay By Credit Card</a
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
