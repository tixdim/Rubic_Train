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
									<img src="../assets/img/homepage/tren-otjimaniy.jpg" alt="">
								</div>
								<div class="card-page-card__box-items">
									<div class="card-page-card__box-title">
										<div class="card-page-card__title">Тренировка отжимания</div>
									</div>
									<div class="card-page-card__box-timer">
										<div class="card-page-card__timer">
											<div class="card-page-card__text-timer _timer"></div>
										</div>
									</div>
									<div class="card-page-card__info">
										<div class="card-page-card__info-title">Цитата:</div>
										<div class="card-page-card__info-text">Я отжимаюсь до тех, пор пока не чувствую боль, а затем делаю ещё десять раз!</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card-page__form-surrender">
						<button class="card-page__button-surrender" @click="sendButtonFalseTrainOtg">
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
	name: 'cardOtjimaniy',
	components: {
		headerCardComponents,
		footerComponents
	},

	data() {
		return {
			info: null
		}
	},
	mounted() {
		let time = sessionStorage.getItem('secondsTimeOtjimaniy');
		const countDown = document.querySelector("._timer");
		function updateCountDown() {
			let hours = Math.floor(time / 60 / 60);
			let minutes = Math.floor((time / 60) % 60);
			let seconds = time % 60;
			let minutesNull = minutes < 10 ? "0" + minutes: minutes;
			let secondsNull = seconds < 10 ? "0" + seconds: seconds;
			countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
			time--;
			sessionStorage.setItem('secondsTimeOtjimaniy', time);
			if(hours=="0"){
				countDown.innerHTML = `${minutes}:${secondsNull}`;
			};
			if(time=="-1") {
				async function sendButtonTrueTrainOtg() {
					await axios
    					.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
							userWhoTrainingId: parseInt(localStorage.getItem("id")),
  							exercise: "отжимания",
							isDone: true,
							workoutTime: "2022-06-02T20:36:39.646Z",
  							startWorkoutDate: "2022-06-02T20:36:39.646Z"
						})

					window.location.href = '/profile';
    			}

				sendButtonTrueTrainOtg();
			}
		}
		updateCountDown();
		setInterval(updateCountDown, 1000);
	},

	methods: {
		async sendButtonFalseTrainOtg() {
			await axios
    			.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
					userWhoTrainingId: parseInt(localStorage.getItem("id")),
  					exercise: "отжимания",
					isDone: false,
					workoutTime: "2022-05-31T20:27:47.312Z",
  					startWorkoutDate: "2022-05-31T20:27:47.312Z"
				})
    			.then((response) => (this.info = response))
				.catch(error => {
        			console.log(error["response"]["data"]);
      			});

			if (this.info["status"] == 201) {
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
    	}
	}
}
</script>