<script lang="ts">
	import { ChangeStoreHamburgerMenu, ChangeStoreDeliveryMenu } from '$lib/stores/Menus.store';

	let scrollY: number = 0;

	let innerWidth: number = 0;
</script>

<svelte:window bind:scrollY bind:innerWidth />

{#if innerWidth < 1024}
	<main class="main-content">
		<button on:click={ChangeStoreHamburgerMenu} class="Svg">
			<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="bt bu bv bw"
				><path
					d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"
				></path></svg
			></button
		>
		<div class="spacer_24"></div>
		<a class="title" href=""
			><img
				alt="Strona główna aplikacji&nbsp;Uber&nbsp;Eats"
				role="img"
				src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
				width="111"
				height="20"
				class="bx by bu bz"
			/></a
		>
		<div class="spacer_66"></div>
		<div class="login">
			<svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" class="login-svg"
				><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"
				></path></svg
			>
			<div class="login-text">Zaloguj się</div>
		</div>
		<div class="spacer_16" />
		<a class="register" href="">Zarejestruj się</a>
	</main>

	{#if scrollY > 215}
		<div class="second-content">
			<div class="second-content_search">
				<button class="deliveryButton" on:click={ChangeStoreDeliveryMenu}
					><svg
						aria-hidden="true"
						focusable="false"
						viewBox="0 0 24 24"
						class="br bq d2 al bl cm br bq bv bw"
						><g clip-path="url(#clip0)"
							><path
								d="M17.583 5.166a7.896 7.896 0 00-11.166 0c-3.084 3.083-3.084 8.167 0 11.25L12 21.999l5.583-5.666c3.084-3 3.084-8.084 0-11.167zM12 12.416c-.917 0-1.667-.75-1.667-1.667 0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 .917-.75 1.667-1.667 1.667z"
							></path></g
						><defs
							><clipPath id="clip0"
								><path transform="translate(2 2)" d="M0 0h20v20H0z"></path></clipPath
							></defs
						></svg
					> Wpisz adress dostawy
				</button>
			</div>
		</div>
	{/if}
{:else}

	<div class="main-content_pc">
		
	</div>

{/if}

<style lang="scss">
	a {
		text-decoration: none;
	}

	.main-content {
		top: 0;
		position: absolute;
		height: 8vh;
		width: 100vw;
		z-index: 3;
		display: flex;
		align-items: center;
		background-color: var(--navbarPhone-background-color);
		padding: 0 4vw;
		.Svg {
			width: 20px;
			height: 20px;
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
		}
		.spacer_24 {
			width: 24px;
			height: 1px;
		}
		.tittle {
			width: 111px;
			height: 20;
			display: flex;
			align-items: center;
		}
		.spacer_66 {
			width: 66px;
			height: 0px;
		}
		.login {
			aspect-ratio: 36/40;
			width: 40px;
			height: 36px;
			display: grid;
			place-items: center;
			background-color: white;
			border-radius: 500px;
			.login-svg {
				width: 16px;
				height: 16px;
			}
			.login-text {
				display: none;
			}
		}
		.spacer_16 {
			width: 16px;
			height: 1px;
		}
		.register {
			min-width: 116px;
			max-width: 130px;
			height: 36px;
			border-radius: 500px;
			display: grid;
			place-items: center;
			color: white;
			background-color: black;
			font-family: var(--base-font);
			text-wrap: nowrap;
			font-size: 14px;
			font-weight: 600;
		}
	}

	@media (min-width: 1024px) {
		.main-content {
			background-color: transparent;
			.spacer_66 {
				width: 75vw;
			}
			.login {
				width: 136px;
				display: flex;
				align-items: center;
				padding-left: 10px;
				gap: 10px;

				.login-text {
					display: inline;
				}
			}
		}
	}

	.second-content {
		position: fixed;
		height: 8vh;
		background: #fff;
		width: 100vw;

		&_search {
			display: grid;
			place-items: center;
			height: 8vh;
			button {
				width: 396px;
				height: 56px;
				background-color: #eee;
				display: flex;
				align-items: center;
				font-size: 16px;
				svg {
					width: 24px;
					height: 24px;
					margin: 12px;
				}
			}
		}
	}
</style>
