<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__items">
				<router-link to="/profile" class="header__logo">rubicone</router-link>
				<router-link to="/" class="header__btn"><div class="header__btn-txt">Выйти</div></router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'headerComponents',

}
</script>