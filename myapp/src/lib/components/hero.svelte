<script lang="ts">
	import { ChangeStoreDeliveryMenu, ChangeStoreTimeMenu } from '$lib/stores/Menus.store';
	import DeliveryMenu from './deliveryMenu.svelte';
	import TimeMenu from './timeMenu.svelte';
</script>

<DeliveryMenu />
<TimeMenu />
<main>
	<section class="main-content">
		<div class="deliveryMenu flex-columns">
			<h2>Zamów dostawę w Twojej okolicy</h2>
			<div class="deliveryPlace flex-columns">
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
				<button class="timeButton" on:click={ChangeStoreTimeMenu}>
					<svg
						width="24px"
						height="24px"
						fill="none"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-label="Kiedy"
						role="img"
						focusable="false"
						><path
							d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z"
							fill="#000000"
						></path></svg
					> Dostarcz teraz
				</button>
				<button class="searchMenu" on:click={ChangeStoreDeliveryMenu}>Wyszukaj restauracje</button>
			</div>
		</div>
	</section>

	<slot />
</main>

<style lang="scss">
	.main-content {
		width: 100%;
		height: 100vh;
		background-image: var(--background-hero-phone);
		background-size: cover;
		.deliveryMenu {

			height: 40%;
			width: 100%;
			padding: 0 16px;
			padding-top	: 12vh;
			  
			h2 {
				font-weight: 700;
				font-size: 36px;
				margin-bottom: 24px;
			}
			.deliveryPlace {
				button {
					margin-bottom: 6px;
					height: 56px;
					background-color: #fff;
					display: flex;
					align-items: center;
					font-size: 16px;
					svg {
						width: 24px;
						height: 24px;
						margin: 12px;
					}
				}
				.searchMenu {
					margin-top: 12px;
					border-radius: 10px;
					display: grid;
					place-items: center;
					background-color: black;
					font-size: 18px;
					color: #fff;
				}
			}
		}
	}

	@media (min-width: 1024px) {
		.main-content {
			background-image: var(--background-hero-pc);
			background-size: cover;
			.deliveryMenu {
				display: flex;
				justify-content: center;
				height: 80vh;
				padding: 0 2vw;
				.deliveryPlace {
					flex-direction: row;
					.deliveryButton {
						width: 29vw;
						height: 5.8vh;
					}
					.timeButton {
						width: 11vw;
						margin-left: 0.5vw;
					}
					.searchMenu {
						width: 11vw;
						margin-left: 0.5vw;
						position: relative;
						top: -1.1vh;
						transition: 0.2s;
					}
					.searchMenu:hover{
						background-color: #2d2d2d;
					}
				}
			}
			h2 {
				font-size: 56px !important;
				text-wrap: wrap;
				max-width: 750px;
			}
		}
	}
</style>
