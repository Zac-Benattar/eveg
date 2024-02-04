<script lang="ts">
	import { searchTermStore } from '.././products';

	let searchTerm = '';

	// Whenever searchTerm changes, call search()
	$: {
		searchTerm;
		searchTermStore.set(searchTerm);
	}
</script>

<div class="flex flex-row place-items-center grow">
	<input
		class="input object-cover"
		id="search-input"
		title="Input (text)"
		type="text"
		placeholder="Search"
		bind:value={searchTerm}
	/>
</div>
