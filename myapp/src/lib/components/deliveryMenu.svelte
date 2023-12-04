<script lang="ts">
	import { ChangeStoreDeliveryMenuToOFalse, isDeliveryMenu } from '$lib/stores/Menus.store';
	import { fade } from 'svelte/transition';
</script>

{#if $isDeliveryMenu}
	<main>
		<div class="content-menu" transition:fade={{ delay: 250, duration: 300 }}>
			<button on:click={ChangeStoreDeliveryMenuToOFalse}
				><svg
					width="24px"
					height="24px"
					fill="none"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					><path
						d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
						fill="#000000"
					></path></svg
				></button
			>
		</div>
	</main>
{/if}

<style lang="scss">
	.content-menu {
		position: fixed;
		z-index: 11;
		background-color: white;
		height: 100vh;
		width: 100%;
		button {
			background-color: transparent;
			padding: 20px;
		}
	}
</style>
