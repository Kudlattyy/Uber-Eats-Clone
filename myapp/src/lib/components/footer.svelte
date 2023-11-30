<script lang="ts">
	const toolsLink = [
		{
			href: '#',
			description: 'Pomoc'
		},
		{
			href: '#',
			description: 'Dodaj swoją restauracje'
		},
		{
			href: '#',
			description: 'Zarejestruj się, aby realizować dostawy'
		},
		{
			href: '#',
			description: 'Utwórz konto firmowe'
		},
		{
			href: '#',
			description: 'Warunki dot. opłaty market place'
		},
		{
			href: '#',
			description: 'Umowa dot. usług dostawy'
		}
	];

	const otherLink = [
		{
			href: '#',
			description: 'Restaurację w pobliżu'
		},
		{
			href: '#',
			description: 'Pokaż wszystkie miasta'
		},
		{
			href: '#',
			description: 'Zobacz wszystkie kraje'
		},
		{
			href: '#',
			description: 'Odbiór w pobliżu'
		},
		{
			href: '#',
			description: 'Informacje o Uber Eats'
		},
		{
			href: '#'
		}
	];

	const regulationsLink = [
		{
			href: '#',
			description: 'Działanie stron oraz aplikacji Uber i Uber Eats'
		},
		{
			href: '#',
			description: 'Polityka prywatności'
		},
		{
			href: '#',
			description: 'Warunki'
		},
		{
			href: '#',
			description: 'Cennik'
		},
		{
			href: '#',
			description: 'Nie zgadzam się na sprzedaż ani udostępnianie danych osobowych'
		},
		{
			href: '#',
			description:
				'Ta strona jest chroniona z użyciem kodu reCAPTCHA. Obowiązują dokumenty: Polityka prywatności oraz Warunki korzystania z usług firmy Google'
		},
		{
			href: '#',
			description: '2023 Uber Technologies Inc'
		}
	];
</script>

<main>
	<div class="main-content">
		<hr class="main-content__divider" />
		<img class="main-content__logo" src="/svg/Logo.svg" />
		<div class="main-content__store">
			<img class="main-content__store__image" src="/svg/AppStore.svg" />
			<img class="main-content__store__image" src="/img/GoogleStore.png" />
		</div>
		<div class="main-content__tool">
			<div class="main-content__tool__help">
				{#each toolsLink as Index}
					<a class="main-content__tool__help__link" href={Index.href}>{Index.description}</a>
				{/each}
			</div>
			<div class="main-content__tool__other">
				{#each otherLink as Index}
					<a class="main-content__tool__other__link" href={Index.href}>{Index.description}</a>
				{/each}
				<button class="main-content__tool__other__button"
					><img class="main-content__tool__other__button__image" src="/svg/translate.svg" /> Polski
				</button>
			</div>
		</div>
		<hr class="main-content__divider--second" />
		<div class="main-content__regulation">
			<div class="main-content__regulation__social">
				<img
					class="main-content__regulation__social__image--facebook"
					src="/svg/facebook-svgrepo-com.svg"
				/>
				<img
					class="main-content__regulation__social__image"
					src="/svg/twitter-154-svgrepo-com.svg"
				/>
				<img class="main-content__regulation__social__image" src="/svg/instagram-svgrepo-com.svg" />
			</div>
			<div class="main-content__regulation__link">
				{#each regulationsLink as Index}
					<a class="main-content__regulation__link__item" href={Index.href}>{Index.description}</a
					>
				{/each}
			</div>
		</div>
	</div>

	<slot />
</main>


<style lang="scss">
	.main-content__divider {
	border: solid 0.1px;
	width: 100vw;
	color: #e5e5e5;
}

.main-content__divider--second {
	margin: 60px 0px;
	border: solid 0.1px;
	width: 100vw;
	color: #e5e5e5;
}

.main-content__tool__other__button {
	display: flex;
	justify-content: flex-start;
	gap: 15px;
	background-color: transparent;
	font-size: 18px;
}

.main-content {
	height: 150vh;
	width: 100vw;
	margin-top: 64px;
	padding: 64px 16px 80px;

	&__store {
		margin-top: 50px;
		display: flex;
		gap: 20px;

		&__image {
			width: 135;
			height: 40px;
		}
	}

	&__tool {
		display: flex;
		flex-direction: column;

		&__help {
			margin-top: 64px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			font-size: 18px;
		}

		&__other {
			margin-top: 64px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			font-size: 18px;
		}
	}

	&__regulation {
		display: flex;
		flex-direction: column;

		&__social {
			display: flex;
			align-items: center;
			gap: 15px;

			&__image {
				height: 20px;
				width: 25px;
			}

			&__image--facebook {
				height: 25px;
				width: 25px;
			}
		}

		&__link {
			margin-top: 40px;
			display: flex;
			flex-direction: column;
			gap: 20px;
			font-size: 14px;
		}
	}
}

</style>
