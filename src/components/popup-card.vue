<template>
	<div class="popup popup_new-card">
		<div class="popup__content">
			<div class="popup__body" method="GET">
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
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'popupCard',
	methods: {
		userTime() {
			let userTime = document.querySelector("._time").value;
			let userNameTren = document.querySelector("._tren").value;
			let nice_ans = 0;

			if (userNameTren == "" || userNameTren.length == 0) {

				let inputs = document.querySelector('._tren');
				function input_focus_add(input) {
					input.classList.add('_focus');
					input.parentElement.classList.add('_focus');
				}
				input_focus_add(inputs);

			} else if (userNameTren != "" && userNameTren.length != 0) {

				let inputs = document.querySelector('._tren');
				function input_focus_remove(input) {
					input.classList.remove('_focus');
					input.parentElement.classList.remove('_focus');
				}
				input_focus_remove(inputs);
				nice_ans += 1;

			}
			if (userTime == "" || userTime.length == 0 || userTime == "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_add(input) {
					input.classList.add('_focus');
					input.parentElement.classList.add('_focus');
				}
				input_focus_add(inputs);

			} else if (userTime != "" && userTime.length != 0 && userTime != "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_remove(input) {
					input.classList.remove('_focus');
					input.parentElement.classList.remove('_focus');
				}
				input_focus_remove(inputs);
				nice_ans += 1;

			}
			if (nice_ans == 2) {
				sessionStorage.setItem('userNameTren', userNameTren);
				let splitTime = userTime.split(':');
				let secondsTime = (+splitTime[0]) * 3600 + (+splitTime[1]) * 60;
				sessionStorage.setItem('secondsTime', secondsTime);
				sessionStorage.setItem('itog_time', secondsTime);
				window.location.href = '/new-card';
			}
		},
		closePopup() {
			this.$emit('closePopup');
		},
	},
}
</script>