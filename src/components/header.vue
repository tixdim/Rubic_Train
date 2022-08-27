<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__items">
				<router-link to="/profile" class="header__logo">rubicone</router-link>
				<button @click="exit" class="header__btn"><div class="header__btn-txt">Выйти</div></button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'headerComponents',
	methods: {
		async exit() {
			localStorage.setItem("email", "")
			localStorage.setItem("nickname", "")
			localStorage.setItem("isBoy", "")
			localStorage.setItem("name", "")
			localStorage.setItem("surname", "")
			localStorage.setItem("id", "")
			localStorage.setItem("dateRegistration", "")
			window.location.href = '/';
		}
	}
}
</script>