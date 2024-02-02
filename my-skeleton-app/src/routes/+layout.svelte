<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import BasketSidebar from '$lib/components/BasketSidebar.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead"
				><a href="/" class="btn" data-sveltekit-preload-data="hover"><h1>E-Veg</h1></a
				></svelte:fragment
			>
			<svelte:fragment slot="trail"
				><div class="flex flex-row gap-x-3 place-items-center grow">
					<div><LightSwitch /></div>
					<div><SearchBar /></div>
				</div></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight"><BasketSidebar /></svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col place-items-center grow-0 p-2">
			<p>
				&copy; 2021 InterVeg Coventry Ltd.<br />Fresh produce from the Midland's green countryside.
			</p>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style lang="postcss">
	h1 {
		font-size: 3.5rem;
	}
</style>
