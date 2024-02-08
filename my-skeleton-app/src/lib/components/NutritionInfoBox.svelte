<script lang="ts">
	export let packsize: number = 250;
	export let units: string = 'g';
	export let nutritionInfo: number[] = [0, 0, 0, 0, 0];
	const high = [0, 17.5, 5, 22.5, 1.5];
	const low = [0, 3, 1.5, 5, 0.3];
	const red = 'bg-red-600';
	const orange = 'bg-orange-600';
	const green = 'bg-green-600';

	$: percentages = [
		nutritionInfo[0] / 20,
		nutritionInfo[1] / 0.2,
		nutritionInfo[2] / 0.7,
		nutritionInfo[3] / 0.225,
		nutritionInfo[4] / 0.055
	];

	$: bgcolours = [
		nutritionInfo[0] > 800 ? red : nutritionInfo[0] > 400 ? orange : green,
		nutritionInfo[1] > high[1] ? red : nutritionInfo[1] > low[1] ? orange : green,
		nutritionInfo[2] > high[2] ? red : nutritionInfo[2] > low[2] ? orange : green,
		nutritionInfo[3] > high[3] ? red : nutritionInfo[3] > low[3] ? orange : green,
		nutritionInfo[4] > high[4] ? red : nutritionInfo[4] > low[4] ? orange : green
	];

	let per100: number = 0;
	if (units === 'g' || units === 'ml') {
		per100 = Math.round(nutritionInfo[0] * packsize) / 100;
	}
</script>

<div class="flex flex-col">
	<div class="flex flex-row p-2">
		<div>This pack contains:</div>
	</div>

	<div class="card flex flex-row border-solid border-2 grow-0 text-xs md:text-md">
		<!-- Calories -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center">
			<div class="flex flex-row place-content-center">
				{Math.round(nutritionInfo[0] * 4.19)}kJ
			</div>
			<div class="flex flex-row place-content-center pb-0.5">{nutritionInfo[0]}kcal</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{percentages[0].toFixed(1)}%*
			</div>
		</div>

		<!-- Fat -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center {bgcolours[1]}">
			<div class="flex flex-row place-content-center">Fat</div>
			<div class="flex flex-row place-content-center pb-0.5">{nutritionInfo[1]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{percentages[1].toFixed(1)}%*
			</div>
		</div>

		<!-- Saturates -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center {bgcolours[2]}">
			<div class="flex flex-row place-content-center">Saturates</div>
			<div class="flex flex-row place-content-center pb-0.5">{nutritionInfo[2]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{percentages[2].toFixed(1)}%*
			</div>
		</div>

		<!-- Sugars -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center {bgcolours[3]}">
			<div class="flex flex-row place-content-center">Sugars</div>
			<div class="flex flex-row place-content-center pb-0.5">{nutritionInfo[3]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{percentages[3].toFixed(1)}%*
			</div>
		</div>

		<!-- Salt -->
		<div class="card rounded-2xl border-solid border-2 p-2 flex flex-col place-content-center {bgcolours[4]}">
			<div class="flex flex-row place-content-center">Salt</div>
			<div class="flex flex-row place-content-center pb-0.5">{nutritionInfo[4]}g</div>
			<hr class="flex flex-row place-content-center" />
			<div class="flex flex-row place-content-center">
				{percentages[4].toFixed(1)}%*
			</div>
		</div>
	</div>
	<div class="flex flex-row place-content-center">
		{#if units === 'g' || units === 'ml'}
			<div>
				Energy per 100{units}: {Math.round(per100 * 4.19)}kJ {per100}kcal
			</div>
		{/if}
	</div>
</div>
