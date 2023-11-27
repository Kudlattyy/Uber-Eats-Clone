<script lang="ts">
	import { ChangeStoreHamburgerMenu, isHamburgerMenu } from '$lib/stores/Menus.store';
	import { slide } from 'svelte/transition';
</script>

{#if $isHamburgerMenu}
	<main>
		<section class="content-menu">
			<div class="hamburger-menu" transition:slide={{ delay: 250, duration: 300, axis: 'x' }}>
				<nav class="content">
					<div class="up">
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
					<div class="down">
						<div class="uberInfo">
							<div class="uberLogo">
								<img class="Logo" src="/UberEatsLogo.svg" />
							</div>
							<div class="description">W aplikacji wybór jest jeszcze większy</div>
						</div>
						<div class="download">
							<svg aria-hidden="true" focusable="false" viewBox="0 0 22 22" class="appleLogo"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"
								></path></svg
							>
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
					@include flex-columns;
					justify-content: space-between;
					.up {
						@include flex-columns;
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
								background-color: #333;
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
						@include flex-columns;
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
								width: 22px;
								height: 22px;
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

	@media (min-width: 1024px){
		.hamburger-menu{
			width: 16% !important;
			.register{
				background-color: #000 !important;
			}
			.description{
				color: #1b1b1b !important;
			}
		}
	}
</style>
