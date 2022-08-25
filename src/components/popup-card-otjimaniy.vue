<template>
<div class="popup popup_card-otjimaniy">
	<div class="popup__content">
		<form action="/card-otjimaniy" class="popup__body" ref="popup__body" method="GET">
			<div class="popup__items">
				<div class="popup__title">Добавить тренировку</div>
				<div class="popup__wrapper-input">
					<input required type="time" data-value="" class="popup__input _req _time-otjimaniy">
				</div>
				<div class="popup__box-button">
					<div class="popup__button popup__close" @click="closePopup">
						<div class="popup__close">Отмена</div>
					</div>
					<button type="submit" class="popup__button _btn-time-otjimaniy" v-on:click="userTimeOtjimaniy">
						<div class="popup__text-btn">Добавить</div>
					</button>
				</div>
			</div>
			<div class="popup__cross" @click="closePopup">
				<span></span>
				<span></span>
			</div>
		</form>
	</div>
</div>
</template>

<script>
export default {
	name: 'popupCardOtjimaniy',
	methods: {
		userTimeOtjimaniy() {
			let userTimeOtjimaniy = document.querySelector("._time-otjimaniy").value;
			let splitTimeOtjimaniy = userTimeOtjimaniy.split(':');
			let secondsTimeOtjimaniy = (splitTimeOtjimaniy[0]) * 3600 + (splitTimeOtjimaniy[1]) * 60;
			sessionStorage.setItem('secondsTimeOtjimaniy', secondsTimeOtjimaniy);
			sessionStorage.setItem('itog_time', secondsTimeOtjimaniy);
		},
		closePopup() {
			this.$emit('closePopup')
		}
	},
}
</script>