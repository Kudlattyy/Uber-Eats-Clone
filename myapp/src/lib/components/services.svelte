<main>
	<section class="main-content">
		<div class="header">
			<div class="application">
				<img class="Logo" src="/UberEatsLogo.svg" />
				W aplikacji na iPhone'a wybór jest jeszcze większy.
			</div>
			<div class="download">
				<button>Pobierz aplikacje</button>
			</div>
		</div>
	</section>
	<slot />
</main>

<style lang="scss">
	.main-content {
		height: 300vh;
		.header {
			height: 196px;
			margin: 48px 16px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			.application {
				display: flex;
				align-items: center;
				gap: 20px;
				font-size: 24px;
				font-weight: 700;
				.Logo {
					height: 64px;
					width: 64px;
				}
			}
			Button{
				height: 56px;
				width: 100%;
				border-radius: 8px;
				font-size: 18px;
				font-weight: 600;
			}
		}
	}
</style>
