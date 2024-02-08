<script lang="ts">
	import CardProcessor from '$lib/components/CardProcessor.svelte';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

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

		<div class="flex flex-col p-5">
			<CardProcessor />
		</div>
	</div>
</div>
