<script lang="ts">
	export let packsize: number = 250;
	export let units: string = 'g';
	export let nutritionInfo: number[] = [0, 0, 0, 0, 0];

	let per100: number = 0;
	if (units === 'g' || units === 'ml') {
		per100 = Math.round(nutritionInfo[0] * packsize) / 100;
	}
</script>

<div class="flex flex-col">
	<div class="flex flex-row place-content-center">
		<div>This pack contains:</div>
	</div>

	<div class="card flex flex-row border-solid border-2 grow-0 text-xs md:text-md">
		<!-- Calories -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center">
			<div class="flex flex-row place-content-center">
				{Math.round(nutritionInfo[0] * 4.19)}kJ
			</div>
			<div class="flex flex-row place-content-center">{nutritionInfo[0]}kcal</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{(nutritionInfo[0] / 2000).toFixed(2)}%*
			</div>
		</div>

		<!-- Fat -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center">
			<div class="flex flex-row place-content-center">Fat</div>
			<div class="flex flex-row place-content-center">{nutritionInfo[1]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{(nutritionInfo[1] / 20).toFixed(2)}%*
			</div>
		</div>

		<!-- Saturates -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center">
			<div class="flex flex-row place-content-center">Saturates</div>
			<div class="flex flex-row place-content-center">{nutritionInfo[2]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{(nutritionInfo[2] / 70).toFixed(2)}%*
			</div>
		</div>

		<!-- Sugars -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center">
			<div class="flex flex-row place-content-center">Sugars</div>
			<div class="flex flex-row place-content-center">{nutritionInfo[3]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{(nutritionInfo[3] / 150).toFixed(2)}%*
			</div>
		</div>

		<!-- Salt -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center">
			<div class="flex flex-row place-content-center">Salt</div>
			<div class="flex flex-row place-content-center">{nutritionInfo[4]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{(nutritionInfo[4] / 55).toFixed(2)}%*
			</div>
		</div>
	</div>
	<div class="flex flex-row place-content-center">
		{#if units === 'g' || units === 'ml'}
			<div>
				Energy per 100{units}: {per100 * 4.19}kJ {per100}kcal
			</div>
		{/if}
	</div>
</div>
