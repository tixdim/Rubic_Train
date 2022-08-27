<template>
	<div class="popup popup_new-card">
		<div class="popup__content">
			<div class="popup__body popup__body-tren">
				<div class="popup__items popup__items-tren">
					<div class="popup__title">Вы уверены, что хотите выйти?</div>
					<div class="popup__sub-title">*ваша тренировка не сохранится</div>
					<div class="popup__box-button popup__box-button-tren">
						<div class="popup__button popup__close" v-on:click="lose">
							<div class="popup__close">Да</div>
						</div>
						<a class="popup__button" @click="closePopup">
							<div class="popup__text-btn">Нет</div>
						</a>
					</div>
				</div>
				<div class="popup__cross" @click="closePopup">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'popupCard',
	methods: {
		lose() {
			localStorage.setItem("email", "")
			localStorage.setItem("nickname", "")
			localStorage.setItem("isBoy", "")
			localStorage.setItem("name", "")
			localStorage.setItem("surname", "")
			localStorage.setItem("id", "")
			localStorage.setItem("dateRegistration", "")
			sessionStorage.setItem('flagTren', 0);
			window.location.href = '/';
		},
		closePopup() {
			this.$emit('closePopup');
		},
	},
	mounted () {
		document.addEventListener('keydown', function (e) {
			if (e.code === 'Escape') {
				closePopup();
			}
		});
	},
}
</script>