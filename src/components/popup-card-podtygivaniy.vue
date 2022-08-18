<template>
<div class="popup popup_card-podtygivaniy">
	<div class="popup__content">
		<form action="/card-podtygivaniy" class="popup__body" ref="popup__body" method="GET">
			<div class="popup__items">
				<div class="popup__title">Добавить тренировку</div>
				<div class="popup__wrapper-input">
					<input required type="time" data-value="" class="popup__input _req _time-podtygivaniy">
				</div>
				<div class="popup__box-button">
					<div class="popup__button popup__close" @click="closePopup">
						<div class="popup__close">Отмена</div>
					</div>
					<button type="submit" class="popup__button _btn-time-podtygivaniy" v-on:click="userTimePodtygivaniy">
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
		userTimePodtygivaniy() {
			let userTimePodtygivaniy = document.querySelector("._time-podtygivaniy").value;
			let splitTimePodtygivaniy = userTimePodtygivaniy.split(':');
			let secondsTimePodtygivaniy = (+splitTimePodtygivaniy[0]) * 3600 + (+splitTimePodtygivaniy[1]) * 60;
			sessionStorage.setItem('secondsTimePodtygivaniy', secondsTimePodtygivaniy);
		},
		closePopup() {
			this.$emit('closePopup')
		}
	},
}
</script>