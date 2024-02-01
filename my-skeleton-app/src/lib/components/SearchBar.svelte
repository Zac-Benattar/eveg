<script lang="ts">
	import { searchTerm } from '$lib/products';

	function search() {
		// Find the search input element
		const searchInput = document.getElementById('search-input') as HTMLInputElement;

		// Get the search term value
		searchTerm.set(searchInput.value);
	}
</script>

<div class="flex flex-row place-items-center grow gap-3">
	<input class="input" id="search-input" title="Input (text)" type="text" placeholder="Search" />

	<button type="button" class="btn-icon variant-filled" on:click={search}>🔍</button>
</div>
