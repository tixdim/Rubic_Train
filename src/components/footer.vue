<template>
	<footer class="footer">
		<div class="footer__container _container">
			<div class="footer__line"></div>
			<div class="footer__items">
				<div class="footer__title">Присоединиться:</div>
				<div class="footer__icon-box">
					<a href="#" class="footer__icon"><img src="../assets/img/footer/vk.svg" alt=""></a>
					<router-link to="/" class="footer__icon"><img src="../assets/img/footer/insta.svg" alt=""></router-link>
					<router-link to="/test" class="footer__icon"><img src="../assets/img/footer/youtube.svg" alt=""></router-link>
				</div>
				<div class="footer__bottom-box">
					<a href="#" class="footer__link">О нас</a>
					<a href="#" class="footer__link">Вопросы и ответы</a>
					<a href="#" class="footer__link">+7-950-900-07-89</a>
					<a href="#" class="footer__link">zhuludkovr@gmail.com</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'footerComponents',
}
</script>