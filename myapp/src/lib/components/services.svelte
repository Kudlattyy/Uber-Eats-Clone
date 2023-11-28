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
		<div class="map">
			<div class="title"><h2>Miasta w pobliżu</h2></div>
			<div class="test">
				<div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
					<div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
					<script>
						(function () {
							var setting = {
								query: 'Armii Krajowej 10, 28-200 Staszów, Poland',
								width: 398,
								height: 386,
								satellite: false,
								zoom: 6,
								placeId: 'ChIJu3OsUgxYPUcR8B7NuY6ki9Y',
								cid: '0xd68ba48eb9cd1ef0',
								coords: [50.5667213, 21.1664429],
								lang: 'en',
								queryString: 'Armii Krajowej 10, 28-200 Staszów, Poland',
								centerCoord: [50.5667213, 21.1664429],
								id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
								embed_id: '1035182'
							};
							var d = document;
							var s = d.createElement('script');
							s.src = 'https://1map.com/js/script-for-user.js?embed_id=1035182';
							s.async = true;
							s.onload = function (e) {
								window.OneMap.initMap(setting);
							};
							var to = d.getElementsByTagName('script')[0];
							to.parentNode.insertBefore(s, to);
						})();
					</script><a href="https://1map.com/map-embed">1 Map</a>
				</div>
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
		height: 300vh;
		margin: 0px 16px;
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
			gap: 20px
		}
	}
</style>
