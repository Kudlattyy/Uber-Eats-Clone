<script lang="ts">
	import '$lib/styles/app.scss';
	import Navbar from '$lib/components/navbar.svelte';
	import HamburgerMenu from '$lib/components/hamburgerMenu.svelte';
</script>

<HamburgerMenu />
<Navbar />
<slot />
