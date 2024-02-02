<script lang="ts">
	function acceptCookies() {
		const cookieMessage = document.getElementById('cookieMessage');
		if (cookieMessage !== null)
			cookieMessage.style.display = 'none';
	}

</script>

<div id="cookieMessage">
	<h1>This site uses cookies</h1>
	<p>By using this site, you are consenting to our use of cookies</p>
	<p>
		We use cookies purely for the functionality of the website - to store the products that are in
		your basket.
	</p>
	<p>For further details of how we use your data, please see our privacy policy.</p>
	<p>
		<button type="button" class="btn variant-filled" on:click={acceptCookies}>
			<span>✔️</span>
			<span>Accept</span>
		</button>
	</p>
</div>
