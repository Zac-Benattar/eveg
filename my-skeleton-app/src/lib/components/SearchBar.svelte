<script lang="ts">
	import { searchTermStore } from '.././products';
	function search() {
		// Find the search input element
		const searchInput = document.getElementById('search-input') as HTMLInputElement;

		// Get the search term value
		searchTermStore.set(searchInput.value);
	}

	function handleKeypress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			search();
		}
	}
</script>

<div class="flex flex-row place-items-center grow gap-3">
	<input
		class="input object-cover"
		id="search-input"
		title="Input (text)"
		type="text"
		placeholder="Search"
		on:keypress={handleKeypress}
	/>

	<button type="button" class="btn-icon variant-filled invisible md:visible" on:click={search}
		>🔍</button
	>
</div>
