<script lang="ts">
	import { ChangeStoreHamburgerMenu, isHamburgerMenu } from '$lib/stores/hamburgerMenu.store';
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
                                    <a href="#">Utwórz konto firmowe</a>
                                </li>
								<li>
                                    <a href="#">Dodaj swoją restauracje</a>
                                </li>
								<li>
                                    <a href="#">Zarejestruj się, aby realizować</a>
                                </li>
							</ul>
						</div>
					</div>
					<div class="down"></div>
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
		background-color: rgb(0, 1, 1, 0.5);
		.content-menu {
			width: 100%;
			height: 100%;
			position: fixed;
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
							gap: 16px;
							a {
								height: 56px;
                                border-radius: 8px;
                                display: grid;
                                place-items: center;
                               
							}
                            .register{
                                background-color: #000000;
                                color: #fff;
                                font-size: 18px;
                            }
                            .login{
                                background-color: #eeeeee;
                                color: #000;
                                font-size: 18px;
                            }
                            
						}
                        .company-login{
                            margin-top: 24px;
                            margin-bottom: 24px;
                            @include flex-columns;

                        }
					}
					.down {
						@include flex-columns;
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
</style>
