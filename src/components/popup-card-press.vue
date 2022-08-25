<template>
<div class="popup popup_card-press">
	<div class="popup__content">
		<form action="/card-press" class="popup__body" ref="popup__body" method="GET">
			<div class="popup__items">
				<div class="popup__title">Добавить тренировку</div>
				<div class="popup__wrapper-input">
					<input required type="time" data-value="" class="popup__input _req _time-press">
				</div>
				<div class="popup__box-button">
					<div class="popup__button popup__close" @click="closePopup">
						<div class="popup__close">Отмена</div>
					</div>
					<button type="submit" class="popup__button _btn-time-press" v-on:click="userTimePress">
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
	name: 'popupCardPress',
	methods: {
		userTimePress() {
			let userTimePress = document.querySelector("._time-press").value;
			let splitTimePress = userTimePress.split(':');
			let secondsTimePress = (+splitTimePress[0]) * 3600 + (+splitTimePress[1]) * 60;
			sessionStorage.setItem('secondsTimePress', secondsTimePress);
			sessionStorage.setItem('itog_time', secondsTimePress);
		},
		closePopup() {
			this.$emit('closePopup')
		}
	},
}
</script>