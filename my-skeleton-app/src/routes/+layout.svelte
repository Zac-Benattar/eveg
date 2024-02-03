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
	import { Modal } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { CartOutline } from 'flowbite-svelte-icons';

	initializeStores();

	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	$: classesBasketSidebar = $page.url.pathname === '/' ? 'w-0 lg:w-64' : 'w-0';
	$: classesBurgerButton = $page.url.pathname === '/' ? 'lg:hidden' : 'hidden';
	$: showSearchBar = $page.url.pathname === '/' ? true : false;

	function drawerOpen(): void {
		const drawerSettings: DrawerSettings = {
			width: 'w-[256px] md:w-[316px]',
			padding: 'p-4',
			rounded: 'rounded-md',
			position: 'right'
		};
		drawerStore.open(drawerSettings);
	}

	onMount(() => {
		const modal: ModalSettings = {
			type: 'confirm',
			// Data
			title: 'This site uses cookies',
			body: 'By using this site, you are consenting to our use of cookies <br> We use cookies purely for the functionality of the website - to store the products that are in your basket. <br> For further details of how we use your data, please see our privacy policy.',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	});
</script>

<Drawer><BasketSidebar /></Drawer>
<Modal />
<!-- App Shell -->
<AppShell slotSidebarRight="bg-surface-500/5 {classesBasketSidebar}">
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
					<div>
						{#if showSearchBar}<SearchBar />{/if}
					</div>
					<div>
						<button class="{classesBurgerButton} btn btn-sm mr-4" on:click={drawerOpen}>
							<span>
								<CartOutline />
							</span>
						</button>
					</div>
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
