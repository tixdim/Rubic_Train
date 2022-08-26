<template>
	<div class="wrapper">
		<header-card-components/>
		<main class="page">
			<div class="card-page">
				<div class="card-page__container _container">
					<div class="card-page__items">
						<div class="card-page__box-card">
							<div class="card-page__card card-page-card">
								<div class="card-page-card__bg">
									<img src="../assets/img/homepage/tren-na-nogi.jpg" alt="">
								</div>
								<div class="card-page-card__box-items">
									<div class="card-page-card__box-title">
										<div class="card-page-card__title">Тренировка на ноги</div>
									</div>
									<div class="card-page-card__box-timer">
										<div class="card-page-card__timer">
											<div class="card-page-card__text-timer _timer"></div>
										</div>
									</div>
									<div class="card-page-card__info">
										<div class="card-page-card__info-title">Цитата:</div>
										<div class="card-page-card__info-text">Когда весь мир свалился тебе на плечи - приседай!</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card-page__form-surrender">
						<button class="card-page__button-surrender" @click="sendButtonFalseTrainNogi">
							<div class="card-page__text-surrender">Сдаться</div>
						</button>
					</div>
				</div>
			</div>
		</main>
		<footer-components/>
	</div>
</template>

<script>
import headerCardComponents from '../components/header-card'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'cardNaNogi',
	components: {
		headerCardComponents,
		footerComponents,
	},

	data() {
		return {
			info: null,
			start_time: 0
		}
	},
	mounted() {
		this.start_time = parseInt(sessionStorage.getItem('itog_time'));
		let time = sessionStorage.getItem('secondsTimeNaNogi');
		const countDown = document.querySelector("._timer");
		let time_1 = this.start_time;
		function updateCountDown() {
			let hours = Math.floor(time / 60 / 60);
			let minutes = Math.floor((time / 60) % 60);
			let seconds = time % 60;
			let minutesNull = minutes < 10 ? "0" + minutes: minutes;
			let secondsNull = seconds < 10 ? "0" + seconds: seconds;
			countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
			time--;
			sessionStorage.setItem('secondsTimeNaNogi', time);

			if(hours=="0"){
				countDown.innerHTML = `${minutes}:${secondsNull}`;
			};

			if(parseInt(time) <= -1) {
				async function sendButtonTrueTrainNogi() {
					await axios
    					.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
							userWhoTrainingId: parseInt(localStorage.getItem("id")),
  							exercise: "на ноги",
							isDone: true,
							workoutTime: time_1
						})
					window.location.href = '/profile';
    			}
				sendButtonTrueTrainNogi();
				
			}
		}
		updateCountDown();
		setInterval(updateCountDown, 1000);
		this.end_tren = end_tren_1;
	},

	methods: {
		async sendButtonFalseTrainNogi() {
			await axios
    			.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
					userWhoTrainingId: parseInt(localStorage.getItem("id")),
  					exercise: "на ноги",
					isDone: false,
					workoutTime: this.start_time
				})
    			.then((response) => (this.info = response))
				.catch(error => {
        			console.log(error["response"]["data"]);
      			});

			if (this.info["status"] == 201) {
				sessionStorage.setItem('secondsTimeNaNogi', "-1");
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
    	},
	}
}
</script>