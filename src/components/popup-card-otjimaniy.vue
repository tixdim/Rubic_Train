<template>
	<div class="popup popup_card-otjimaniy">
		<div class="popup__content">
			<div class="popup__body">
				<div class="popup__items">
					<div class="popup__title">Добавить тренировку</div>
					<div class="popup__wrapper-input">
						<input type="time" data-value="" class="popup__input _req _time-otjimaniy _time">
					</div>
					<div class="popup__box-button">
						<div class="popup__button popup__close" @click="closePopup">
							<div class="popup__close">Отмена</div>
						</div>
						<a class="popup__button _btn-time-otjimaniy" v-on:click="TimeOtjimaniy">
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
	name: 'popupCardOtjimaniy',
	methods: {
		TimeOtjimaniy() {
			let userTimeOtjimaniy = document.querySelector("._time").value;
			let nice_ans = 0;

			if (userTimeOtjimaniy == "" || userTimeOtjimaniy.length == 0 || userTimeOtjimaniy == "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_add(input) {
					input.classList.add('_focus');
					input.parentElement.classList.add('_focus');
				}
				input_focus_add(inputs);

			} else if (userTimeOtjimaniy != "" && userTimeOtjimaniy.length != 0 && userTimeOtjimaniy != "00:00") {

				let inputs = document.querySelector('._time');
				function input_focus_remove(input) {
					input.classList.remove('_focus');
					input.parentElement.classList.remove('_focus');
				}
				input_focus_remove(inputs);
				nice_ans += 1;

			}
			if (nice_ans == 1) {
				let splitTimeOtjimaniy = userTimeOtjimaniy.split(':');
				let secondsTimeOtjimaniy = (splitTimeOtjimaniy[0]) * 3600 + (splitTimeOtjimaniy[1]) * 60;
				sessionStorage.setItem('secondsTimeOtjimaniy', secondsTimeOtjimaniy);
				sessionStorage.setItem('itog_time', secondsTimeOtjimaniy);
				sessionStorage.setItem('flagTren', 3);
				this.$emit('closePopup');
				window.location.href = '/main-page';
			}
		},
		closePopup() {
			this.$emit('closePopup')
		}
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