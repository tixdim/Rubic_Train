<template>
	<div class="popup popup_new-card">
		<div class="popup__content">
			<div class="popup__body">
				<div class="popup__items">
					<div class="popup__title">Вы уверены, что хотите сдаться?</div>
					<div class="popup__box-button">
						<div class="popup__button popup__close" v-on:click="lose">
							<div class="popup__close">Да</div>
						</div>
						<a class="popup__button _btn-time" @click="closePopup">
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

import axios from "axios"

export default {
	name: 'popupCard',
	methods: {
		async lose() {
			await axios
				.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
					userWhoTrainingId: parseInt(localStorage.getItem("id")),
					exercise: "отжимания",
					isDone: false,
					workoutTime: parseInt(sessionStorage.getItem('itog_time'))
				})
				.then((response) => (this.info = response))
				.catch(error => {
					console.log(error["response"]["data"]);
				});

			if (this.info["status"] == 201) {
				sessionStorage.setItem('flagTren', 0);
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
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