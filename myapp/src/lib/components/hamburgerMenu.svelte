<script lang="ts">
	import { ChangeStoreHamburgerMenu, isHamburgerMenu } from '$lib/stores/Menus.store';
	import { slide } from 'svelte/transition';
</script>

{#if $isHamburgerMenu}
	<main>
		<section class="content-menu">
			<div class="hamburger-menu" transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
				<nav class="content flex-columns">
					<div class="up flex-columns">
						<div class="user-login">
							<a class="register" href="#"> Zarejestruj się </a>
							<a class="login" href="#">Zaloguj się</a>
						</div>
						<div class="company-login">
							<ul>
								<li>
									<a class="a-company" href="#">Utwórz konto firmowe</a>
								</li>
								<li>
									<a class="a-company" href="#">Dodaj swoją restauracje</a>
								</li>
								<li>
									<a class="a-company" href="#">Zarejestruj się, aby realizować dostawy</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="down flex-columns">
						<div class="uberInfo">
							<div class="uberLogo">
								<img class="Logo" src="/svg/UberEatsLogo.svg" />
							</div>
							<div class="description">W aplikacji wybór jest jeszcze większy</div>
						</div>
						<div class="download">
							<img class="appleLogo" src="/svg/apple-logo.svg" alt="" srcset="">
							<a class="downloadGooglePlay"> Pobierz aplikacje </a>
						</div>
					</div>
				</nav>
			</div>
			<button class="hamburger-menu_off" on:click={ChangeStoreHamburgerMenu}></button>
		</section>
	</main>
{/if}

<style lang="scss">
	@import '../styles/app.scss';

	main {
		width: 100vw;
		height: 100vh;
		position: absolute;
		background-color: rgba(38, 38, 38, 0.8);
		position: fixed;
		z-index: 10;
		.content-menu {
			width: 100%;
			height: 100%;
			display: flex;
			.hamburger-menu {
				width: 70%;
				height: 100%;
				background-color: #ffffff;
				.content {
					padding: 24px;
					height: 100%;
					justify-content: space-between;
					.up {
						.user-login {
							display: flex;
							flex-direction: column;
							gap: 10px;
							a {
								height: 56px;
								border-radius: 8px;
								display: grid;
								place-items: center;
							}
							.register {
								background-color: #000000;
								color: #fff;
								font-size: 18px;
							}
							.login {
								background-color: #eeeeee;
								color: #000;
								font-size: 18px;
							}
						}
						.company-login {
							margin-top: 24px;
							margin-bottom: 24px;
							height: 124px;
							li {
								margin-bottom: 16px;
								.a-company {
									color: #5d5d5d;
									font-weight: 600;
									font-size: 14px;
								}
							}
						}
					}
					.down {
						.uberInfo {
							display: flex;
							gap: 5px;
							.Logo {
								width: 56px;
								height: 56px;
							}
							.description {
								height: 56px;
								display: grid;
								place-items: center;
								font-size: 16px;
								font-weight: 600;
								color: #5d5d5d;
								padding: 12px;
							}
						}
						.download {
							height: 40px;
							width: 65%;
							margin-top: 16px;
							margin-bottom: 30px;
							padding: 12px;
							display: flex;
							gap: 10px;
							align-items: center;
							background-color: #eeeeee;
							border-radius: 500px;
							font-size: 14px;
							font-weight: 600;
							.appleLogo {
								width: 14px;
								height: 14px;
							}
						}
					}
				}
			}
		}
		.hamburger-menu_off {
			width: 30%;
			height: 100%;
			background-color: transparent;
		}
	}

	@media (min-width: 1024px) {
		.hamburger-menu {
			width: 16% !important;
			.register {
				background-color: #000 !important;
			}
			.description {
				color: #1b1b1b !important;
			}
		}
	}
</style>
