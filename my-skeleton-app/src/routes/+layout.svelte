<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import BasketSidebar from '$lib/components/BasketSidebar.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead"><h1>E-Veg</h1></svelte:fragment>
			<svelte:fragment slot="trail"
				><div class="flex flex-row gap-x-3">
					<LightSwitch /><input
						class="input"
						title="Input (text)"
						type="text"
						placeholder="Search"
					/><a href="/" class="btn variant-filled" data-sveltekit-preload-data="hover">🔍</a>
				</div></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight"><BasketSidebar /></svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<div class="about">
			<div>&copy; 2021 InterVeg Coventry Ltd.</div>
			<div>Fresh produce from the Midland's green countryside.</div>
		</div></svelte:fragment
	>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style lang="postcss">
	h1 {
		font-size: 3.5rem;
	}
</style>
