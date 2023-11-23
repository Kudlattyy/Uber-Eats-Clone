<script lang="ts">
	import { isDeliveryMenu } from '$lib/stores/hamburgerMenu.store';
    import { fade } from 'svelte/transition';
    
</script>

<main>
	{#if isDeliveryMenu}
		<div transition:fade={{ delay: 250, duration: 300 }}>fades in and out</div>
	{/if}
</main>
