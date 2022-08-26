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
									<img src="../assets/img/homepage/tren.jpg" alt="">
								</div>
								<div class="card-page-card__box-items">
									<div class="card-page-card__box-title">
										<div class="card-page-card__title _title-card"></div>
									</div>
									<div class="card-page-card__box-timer">
										<div class="card-page-card__timer">
											<div class="card-page-card__text-timer _timer"></div>
										</div>
									</div>
									<div class="card-page-card__info">
										<div class="card-page-card__info-title">Цитата:</div>
										<div class="card-page-card__info-text">Разум всегда сдается первым, не тело. Секрет в том, чтобы заставить твой разум работать на тебя, а не против тебя.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card-page__form-surrender">
						<button class="card-page__button-surrender" @click="sendButtonFalseTrain">
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
	name: 'newCard',
	components: {
		headerCardComponents,
		footerComponents,
	},

	data() {
		return {
			info: null,
			start_time: 0,
			end_tren: "false"
		}
	},
	mounted() {
		this.start_time = parseInt(sessionStorage.getItem('itog_time'));
		this.end_tren = sessionStorage.getItem('end_tren');
		let userNameTren = sessionStorage.getItem('userNameTren');
		document.querySelector("._title-card").innerHTML = `Тренировка ${userNameTren}`;
		let time = sessionStorage.getItem('secondsTime');
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
			sessionStorage.setItem('secondsTime', time);
			
			if(hours=="0"){
				countDown.innerHTML = `${minutes}:${secondsNull}`;
			};

			if(parseInt(time) <= -1) {
				async function sendButtonTrueTrain() {
					await axios
    					.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
							userWhoTrainingId: parseInt(localStorage.getItem("id")),
  							exercise: userNameTren,
							isDone: true,
							workoutTime: time_1
						})
					window.location.href = '/profile';
    			}

				if (sessionStorage.getItem('end_tren') === false) {
					sendButtonTrueTrain();
					sessionStorage.setItem('end_tren', true);
				}
				
			}
		}
		updateCountDown();
		setInterval(updateCountDown, 1000);
	},

	methods: {
		async sendButtonFalseTrain() {
			if (this.end_tren == "false") {
				sessionStorage.setItem('end_tren', "true");
				await axios
    				.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
						userWhoTrainingId: parseInt(localStorage.getItem("id")),
  						exercise: sessionStorage.getItem('userNameTren'),
						isDone: false,
						workoutTime: this.start_time
					})
    				.then((response) => (this.info = response))
					.catch(error => {
        				console.log(error["response"]["data"]);
      				});

				if (this.info["status"] == 201) {
					sessionStorage.setItem('end_tren', true);
					window.location.href = '/profile';
				}
				else {
					console.log(this.info)
				}
			}
    	}
	}
}
</script>