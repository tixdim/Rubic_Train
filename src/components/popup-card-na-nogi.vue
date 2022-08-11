<template>
<div class="popup popup_card-na-nogi">
	<div class="popup__content">
		<form action="/card-na-nogi" class="popup__body" ref="popup__body" method="GET">
			<div class="popup__items">
				<div class="popup__title">Добавить тренировку</div>
				<div class="popup__wrapper-input">
					<input type="time" data-value="" class="popup__input _req _time-na-nogi">
				</div>
				<div class="popup__box-button">
					<div class="popup__button popup__close" @click="closePopup">
						<div class="popup__close">Отмена</div>
					</div>
					<button type="submit" class="popup__button _btn-time-na-nogi" v-on:click="userTimeNaNogi">
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
	name: 'popupCardNogi',
	methods: {
		userTimeNaNogi() {
			let userTimeNaNogi = document.querySelector("._time-na-nogi").value;
			let splitTimeNaNogi = userTimeNaNogi.split(':');
			let secondsTimeNaNogi = (+splitTimeNaNogi[0]) * 3600 + (+splitTimeNaNogi[1]) * 60;
			sessionStorage.setItem('secondsTimeNaNogi', secondsTimeNaNogi);
		},
		closePopup() {
			this.$emit('closePopup')
		}
	},
}
</script>