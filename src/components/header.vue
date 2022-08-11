<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__items">
				<router-link to="/main-page" class="header__logo">rubicone</router-link>
				<router-link to="/profile" class="header__profile"><img src="../assets/img/header/profile.svg" alt=""></router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'headerComponents',

}
</script>