<template>
<div class="popup popup_new-card">
	<div class="popup__content">
		<form action="/new-card" class="popup__body" method="GET">
			<div class="popup__items">
				<div class="popup__title">Добавить тренировку</div>
				<div class="popup__wrapper-input">
					<input type="text" data-value="" placeholder="Название тренировки" class="popup__input _req _tren">
				</div>
				<div class="popup__wrapper-input">
					<input type="time" data-value="" class="popup__input _req _time">
				</div>
				<div class="popup__box-button">
					<div class="popup__button popup__close" @click="closePopup">
						<div class="popup__close">Отмена</div>
					</div>
					<button type="submit" class="popup__button _btn-time" v-on:click="userTime">
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
	name: 'popupCard',
	methods: {
		userTime() {
			let userNameTren = document.querySelector("._tren").value;
			sessionStorage.setItem('userNameTren', userNameTren);
			let userTime = document.querySelector("._time").value;
			let splitTime = userTime.split(':');
			let secondsTime = (+splitTime[0]) * 3600 + (+splitTime[1]) * 60;
			sessionStorage.setItem('secondsTime', secondsTime);
			sessionStorage.setItem('itog_time', secondsTime);
		},
		closePopup() {
			this.$emit('closePopup');
		},
	},
}
</script>