<script lang="ts">
	export let allergenNums: number[] = [0, 0, 0, 0, 0];
	const allergens: string[] = ['Nuts', 'Milk', 'Soya', 'Wheat', 'Gluten'];
</script>

<div class="flex flex-col">
	<div class="flex flex-row p-2">
		<div>Allergens:</div>
	</div>

	<div class="flex flex-col grow-0 text-sm md:text-md ml-6">
		<ul class="list-disc">
			{#each allergenNums as allergen, i}
				{#if allergen}
					<li class="">{allergens[i]}</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
