<main>
	<hr />
	<div class="main-content">
		<img src="/Logo.svg" />
		<div class="Stores">
			<img class="Stores-style" src="/AppStore.svg" />
			<img class="Stores-style" src="/GoogleStore.png" />
		</div>
		<div class="Tools">
			<div class="Help">

			</div>
			<div class="Other">
				
			</div>
		</div>
	</div>
	<slot />
</main>

<style lang="scss">
	hr {
		border: solid 0.1px;
		width: 100vw;
		color: #e5e5e5;
	}
	.main-content {
		height: 100vh;
		margin-top: 64px;
		padding: 64px 16px 80px;
		.Stores{
			margin-top: 50px;
			display: flex;
			gap: 20px;
			.Stores-style{
				width: 135;
				height: 40px;
			}
		}
	}
</style>
