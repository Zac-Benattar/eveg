<script lang="ts">
	import BasketTable from '$lib/components/BasketTable.svelte';
</script>

<div class="main-container p-2">
	<div id="basket" class="flex flex-col">
		<h2>Basket Contents</h2>
		<BasketTable />
	</div>

	<div id="customerDetails" class="flex flex-col">
		<h2>Customer Details</h2>

		<form class="customerDetails" action="creditcard">
			<div class="flex flex-col grow-0 gap-y-2 w-70">
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
				<a href="/creditcard" class="btn variant-filled" data-sveltekit-preload-data="hover"
					>Pay By Credit Card</a
				>
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
	.main-container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
</style>
