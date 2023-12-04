<script lang="ts">
	const oferty = [
		{
			src: '/img/1.webp',
			title: 'Zadbaj o posiłki dla pracowników',
			description: 'Utwórz konto firmowe'
		},
		{
			src: '/img/2.webp',
			title: 'Ty zapewniasz menu, a my dostawę',
			description: 'Dodaj swoją restaurację'
		},
		{
			src: '/img/3.webp',
			title: 'Realizuj dostawy z Uber Eats',
			description: 'Zarejestruj się, aby realizować dostawy'
		}
	] as const;

	const cityNearby = [
		'Bydgoszcz',
		'Częstochowa',
		'Kraków',
		'Łódź',
		'Lublin',
		'Poznań',
		'Rzeszów',
		'Szczecin',
		'Toruń',
		'Trójmiasto',
		'Warszawa',
		'Wrocław'
	] as const;

	const operatingCountries = [
		'Australia',
		'Belgia',
		'Chile',
		'Dominikana',
		'Ekwador',
		'Francja',
		'Gwatemala',
		'Hiszpania',
		'Holandia',
		'Irlandia',
		'Japonia',
		'Kanada',
		'Kenia',
		'Kostaryka',
		'Niemcy',
		'Nowa Zelandia',
		'Panama',
		'Polska',
		'Portugalia',
		'Republika Południowej Afryki',
		'Salwador',
		'Sri Lanka',
		'Stany Zjednoczone',
		'Szwajcaria',
		'Szwecja',
		'Tajwan (Republika Chińska)',
		'Wielka Brytania',
		'Włochy',
		'Meksyk'
	] as const;
</script>

<main>
	<section class="main-content">
		<div class="header">
			<div class="application">
				<img class="Logo" src="/svg/UberEatsLogo.svg" />
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
		<div class="map">
			<div class="title"><h2>Miasta w pobliżu</h2></div>
			<div class="graphic">
				<img src="/img/Map.png" alt="" srcset="" />
			</div>
			<div class="cityNearby">
				<div class="Cities">
					{#each cityNearby as Index}
						<p class="fontCityNearby">{Index}</p>
					{/each}
				</div>
				<p>Wyświetl wszystkie miasta ponad 500!</p>
			</div>
			<div class="operatingCountries">
				<h2>Kraje w których działa Uber Eats</h2>
				<div class="Countries">
					{#each operatingCountries as Index}
						<p class="fontOperantingCity">{Index}</p>
					{/each}
				</div>
				<p>Zobacz wszystkie kraje</p>
			</div>
		</div>
	</section>
	<slot />
</main>

<style lang="scss">
	h2 {
		font-size: 22px;
		font-weight: 700;
	}

	p {
		font-weight: 550;
		text-decoration: underline;
	}

	.main-content {
		width: 100vw;
		padding: 0px 16px;
		.header {
			height: 140px;
			margin: 48px 0px;
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
			display: flex;
			flex-direction: column;

			gap: 12px;
			.sevices-img {
				margin-top: 20px;
			}
		}
		.map {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			.cityNearby {
				display: flex;
				flex-direction: column;
				gap: 30px;
				.Cities {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: repeat(1, 2fr);
					gap: 20px 8px;
					.fontCityNearby {
						font-weight: 500;
						text-decoration: none;
					}
				}
			}
			.operatingCountries {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				gap: 30px;
				.Countries {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: repeat(15, 1fr);
					gap: 24px 8px;
					.fontOperantingCity {
						font-weight: 500;
						text-decoration: none;
					}
				}
			}
		}
	}
</style>
