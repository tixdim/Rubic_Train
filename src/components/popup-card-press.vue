<template>
	<div class="popup popup_card-press">
		<div class="popup__content">
			<div class="popup__body">
				<div class="popup__items">
					<div class="popup__title">Добавить тренировку</div>
					<div class="popup__wrapper-input">
						<input type="time" data-value="" class="popup__input _req _time-press _time">
					</div>
					<div class="popup__box-button">
						<div class="popup__button popup__close" @click="closePopup">
							<div class="popup__close">Отмена</div>
						</div>
						<a class="popup__button _btn-time-press" v-on:click="TimePress">
							<div class="popup__text-btn">Добавить</div>
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
	name: 'popupCardPress',
	methods: {
		TimePress() {
			let userTimePress = document.querySelector("._time").value;
			let nice_ans = 0;

			if (userTimePress == "" || userTimePress.length == 0 || userTimePress == "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_add(input) {
					input.classList.add('_focus');
					input.parentElement.classList.add('_focus');
				}
				input_focus_add(inputs);

			} else if (userTimePress != "" && userTimePress.length != 0 && userTimePress != "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_remove(input) {
					input.classList.remove('_focus');
					input.parentElement.classList.remove('_focus');
				}
				input_focus_remove(inputs);
				nice_ans += 1;

			}
			if (nice_ans == 1) {
				let splitTimePress = userTimePress.split(':');
				let secondsTimePress = (+splitTimePress[0]) * 3600 + (+splitTimePress[1]) * 60;
				sessionStorage.setItem('secondsTimePress', secondsTimePress);
				sessionStorage.setItem('itog_time', secondsTimePress);
				sessionStorage.setItem('flagTren', 5);
				this.$emit('closePopup');
				window.location.href = '/main-page';
			}
		},
		closePopup() {
			this.$emit('closePopup')
		}
	},
}
</script>