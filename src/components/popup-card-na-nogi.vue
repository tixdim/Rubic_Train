<template>
	<div class="popup popup_card-na-nogi">
		<div class="popup__content">
			<div class="popup__body">
				<div class="popup__items">
					<div class="popup__title">Добавить тренировку</div>
					<div class="popup__wrapper-input">
						<input type="time" data-value="" class="popup__input _req _time-na-nogi _time">
					</div>
					<div class="popup__box-button">
						<div class="popup__button popup__close" @click="closePopup">
							<div class="popup__close">Отмена</div>
						</div>
						<button type="submit" class="popup__button _btn-time-na-nogi" v-on:click="TimeNaNogi">
							<div class="popup__text-btn">Добавить</div>
						</button>
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
	name: 'popupCardNogi',
	methods: {
		TimeNaNogi() {
			let userTimeNaNogi = document.querySelector("._time").value;
			let nice_ans = 0;

			if (userTimeNaNogi == "" || userTimeNaNogi.length == 0 || userTimeNaNogi == "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_add(input) {
					input.classList.add('_focus');
					input.parentElement.classList.add('_focus');
				}
				input_focus_add(inputs);

			} else if (userTimeNaNogi != "" && userTimeNaNogi.length != 0 && userTimeNaNogi != "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_remove(input) {
					input.classList.remove('_focus');
					input.parentElement.classList.remove('_focus');
				}
				input_focus_remove(inputs);
				nice_ans += 1;

			}
			if (nice_ans == 1) {
				let splitTimeNaNogi = userTimeNaNogi.split(':');
				let secondsTimeNaNogi = (+splitTimeNaNogi[0]) * 3600 + (+splitTimeNaNogi[1]) * 60;
				sessionStorage.setItem('secondsTimeNaNogi', secondsTimeNaNogi);
				sessionStorage.setItem('itog_time', secondsTimeNaNogi);
				window.location.href = '/card-na-nogi';
			}
		},
		closePopup() {
			this.$emit('closePopup')
		}
	},
}
</script>