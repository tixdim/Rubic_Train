<template>
	<header class="header">
		<div class="header__container _container">
			<div class="header__items header__items_form">
				<router-link to="/" class="header__logo header__logo_form">rubicone</router-link>
				<div class="header__box-button">
					<router-link to="/" class="header__btn"><div class="header__btn-txt">Войти</div></router-link>
					<router-link to="/registration" class="header__btn"><div class="header__btn-txt">Зарегистрироваться</div></router-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'headerFormComponents',

}
</script>