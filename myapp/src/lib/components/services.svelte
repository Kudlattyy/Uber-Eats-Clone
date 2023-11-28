<script lang="ts">
	const oferty = [
		{
			src: '/1.webp',
			title: 'Zadbaj o posiłki dla pracowników',
			description: 'Utwórz konto firmowe'
		},
		{
			src: '/2.webp',
			title: 'Ty zapewniasz menu, a my dostawę',
			description: 'Dodaj swoją restaurację'
		},
		{
			src: '/3.webp',
			title: 'Realizuj dostawy z Uber Eats',
			description: 'Zarejestruj się, aby realizować dostawy'
		}
	];
</script>

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
		<div class="services">
			{#each oferty as index}
				<img class="services-img" src={index.src} />
				<h2>{index.title}</h2>
				<p>{index.description}</p>
			{/each}
		</div>
	</section>
	<slot />
</main>

<style lang="scss">


	h2{
		font-size: 22px;
		font-weight: 700;
	}

	p{
		font-weight: 550;
		text-decoration:underline;
	}

	.main-content {
		height: 300vh;
		.header {
			height: 140px;
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
			Button {
				height: 56px;
				width: 100%;
				border-radius: 8px;
				font-size: 18px;
				font-weight: 600;
			}
		}
		.services {
			margin: 0px 16px;
			display: flex;
			flex-direction: column;
			gap: 12px;
			.sevices-img{
				margin-top: 20px;
			}
		}
	}
</style>
