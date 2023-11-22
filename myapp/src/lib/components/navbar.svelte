<body>
	<section class="main-content">
		<button class="Svg"
			><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="bt bu bv bw"
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
		</div>
		<div class="spacer_16" />
		<a class="register" href="">Zarejestruj się</a>
	</section>

	<slot />
</body>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.main-content {
		height: 7.5vh;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--navbarPhone-background-color);
		padding: 0 16px;
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
		}
		.spacer_16 {
			width: 16px;
			height: 1px;
		}
		.register {
			width: 116px;
			height: 36px;
            border-radius: 500px;
            display: grid;
            place-items: center;
            color: white;
            background-color: black;
            font-family: var(--base-font);
            font-size: 14px;
		}
	}
</style>
