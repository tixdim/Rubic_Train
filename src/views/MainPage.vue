<template>
	<div class="wrapper" v-on:keyup.escape="closePopup">
		<header-components/>
		<main class="page">
			<div v-if="isOpen == '0'" class="main-page">
				<div class="main-page__container _container">
					<div class="main-page__items">
						<div class="main-page__title-card">Создать тренировку</div>
						<div class="main-page__box-card">
							<button class="main-page__card main-page-card" @click="openPopupOtjimaniy">
								<div class="main-page-card__bg">
									<img src="../assets/img/homepage/tren-otjimaniy.jpg" alt="">
								</div>
								<div class="main-page-card__box-items">
									<div class="main-page-card__box-title">
										<div class="main-page-card__title">Тренировка отжимания</div>
									</div>
									<div class="main-page-card__info">
										<div class="main-page-card__info-title">Цитата:</div>
										<div class="main-page-card__info-text">Я отжимаюсь до тех, пор пока не чувствую боль, а затем делаю ещё десять раз!</div>
									</div>
								</div>
							</button>
							<button class="main-page__card main-page-card" @click="openPopupPodtygivaniy">
								<div class="main-page-card__bg">
									<img src="../assets/img/homepage/tren-podtygivaniy.jpg" alt="">
								</div>
								<div class="main-page-card__box-items">
									<div class="main-page-card__box-title">
										<div class="main-page-card__title">Тренировка подтягивания</div>
									</div>
									<div class="main-page-card__info">
										<div class="main-page-card__info-title">Цитата:</div>
										<div class="main-page-card__info-text">Цель тренировок — подтягивать ослабленное, укреплять тело и шлифовать дух.</div>
									</div>
								</div>
							</button>
							<button class="main-page__card main-page-card" @click="openPopupPress">
								<div class="main-page-card__bg">
									<img src="../assets/img/homepage/tren-press.jpg" alt="">
								</div>
								<div class="main-page-card__box-items">
									<div class="main-page-card__box-title">
										<div class="main-page-card__title">Тренировка пресс</div>
									</div>
									<div class="main-page-card__info">
										<div class="main-page-card__info-title">Цитата:</div>
										<div class="main-page-card__info-text">Пресс, ты вообще в курсе, что я тебя качаю?!</div>
									</div>
								</div>
							</button>
							<button class="main-page__card main-page-card" @click="openPopupNaNogi">
								<div class="main-page-card__bg">
									<img src="../assets/img/homepage/tren-na-nogi.jpg" alt="">
								</div>
								<div class="main-page-card__box-items">
									<div class="main-page-card__box-title">
										<div class="main-page-card__title">Тренировка на ноги</div>
									</div>
									<div class="main-page-card__info">
										<div class="main-page-card__info-title">Цитата:</div>
										<div class="main-page-card__info-text">Когда весь мир свалился тебе на плечи - приседай!</div>
									</div>
								</div>
							</button>
							<button class="main-page__new-card" @click="openPopup">
								<div class="main-page__plus-title">Добавить тренировку</div>
								<div class="main-page__box-plus">
									<div class="main-page__plus">
										<span></span>
										<span></span>
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div v-else-if="isOpen == '1'" class="card-page">
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
			<div v-else-if="isOpen == '2'" class="card-page">
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
			<div v-else-if="isOpen == '3'" class="card-page">
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
			<div v-else-if="isOpen == '4'" class="card-page">
				<div class="card-page__container _container">
					<div class="card-page__items">
						<div class="card-page__box-card">
							<div class="card-page__card card-page-card">
								<div class="card-page-card__bg">
									<img src="../assets/img/homepage/tren-podtygivaniy.jpg" alt="">
								</div>
								<div class="card-page-card__box-items">
									<div class="card-page-card__box-title">
										<div class="card-page-card__title">Тренировка подтягивания</div>
									</div>
									<div class="card-page-card__box-timer">
										<div class="card-page-card__timer">
											<div class="card-page-card__text-timer _timer"></div>
										</div>
									</div>
									<div class="card-page-card__info">
										<div class="card-page-card__info-title">Цитата:</div>
										<div class="card-page-card__info-text">Цель тренировок — подтягивать ослабленное, укреплять тело и шлифовать дух.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card-page__form-surrender">
						<button class="card-page__button-surrender" @click="sendButtonFalseTrainPodt">
							<div class="card-page__text-surrender">Сдаться</div>
						</button>
					</div>
				</div>
			</div>
			<div v-else-if="isOpen == '5'" class="card-page">
				<div class="card-page__container _container">
					<div class="card-page__items">
						<div class="card-page__box-card">
							<div class="card-page__card card-page-card">
								<div class="card-page-card__bg">
									<img src="../assets/img/homepage/tren-press.jpg" alt="">
								</div>
								<div class="card-page-card__box-items">
									<div class="card-page-card__box-title">
										<div class="card-page-card__title">Тренировка пресс</div>
									</div>
									<div class="card-page-card__box-timer">
										<div class="card-page-card__timer">
											<div class="card-page-card__text-timer _timer"></div>
										</div>
									</div>
									<div class="card-page-card__info">
										<div class="card-page-card__info-title">Цитата:</div>
										<div class="card-page-card__info-text">Пресс, ты вообще в курсе, что я тебя качаю?!</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="card-page__form-surrender">
						<button class="card-page__button-surrender" @click="sendButtonFalseTrainPress">
							<div class="card-page__text-surrender">Сдаться</div>
						</button>
					</div>
				</div>
			</div>
		</main>
		<transition name="modal"><popup-card-otjimaniy v-if="isPopupOtjimaniy" @closePopup="closePopup"></popup-card-otjimaniy></transition>
		<transition name="modal"><popup-card-podtygivaniy v-if="isPopupPodtygivaniy" @closePopup="closePopup"></popup-card-podtygivaniy></transition>
		<transition name="modal"><popup-card-press v-if="isPopupPress" @closePopup="closePopup"></popup-card-press></transition>
		<transition name="modal"><popup-card-na-nogi v-if="isPopupNaNogi" @closePopup="closePopup"></popup-card-na-nogi></transition>
		<transition name="modal"><popup-card v-if="isPopup" @closePopup="closePopup"></popup-card></transition>
		<footer-components/>
	</div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'
import popupCardOtjimaniy from '../components/popup-card-otjimaniy'
import popupCardPodtygivaniy from '../components/popup-card-podtygivaniy'
import popupCardPress from '../components/popup-card-press'
import popupCardNaNogi from '../components/popup-card-na-nogi'
import popupCard from '../components/popup-card'
import axios from "axios"

export default {
	name: 'mainPage',
		components: {
		headerComponents,
		footerComponents,
		popupCard,
		popupCardOtjimaniy,
		popupCardPodtygivaniy,
		popupCardPress,
		popupCardNaNogi,
	},

	data() {
		return {
			info: null,
			start_time: 0,
			isPopup: false,
			isPopupOtjimaniy: false,
			isPopupPodtygivaniy: false,
			isPopupPress: false,
			isPopupNaNogi: false,
			isOpen: sessionStorage.getItem('flagTren')
		}
	},

	mounted() {
		if (this.isOpen == "1") {
			this.start_time = parseInt(sessionStorage.getItem('itog_time'));
			let userNameTren = sessionStorage.getItem('userNameTren');
			document.querySelector("._title-card").innerHTML = `Тренировка ${userNameTren}`;
			let time = sessionStorage.getItem('secondsTime');
			const countDown = document.querySelector("._timer");
			let time_1 = this.start_time;
			function updateCountDown() {
				let hours = Math.floor(time / 60 / 60);
				let minutes = Math.floor((time / 60) % 60);
				let seconds = time % 60;
				let minutesNull = minutes < 10 ? "0" + minutes : minutes;
				let secondsNull = seconds < 10 ? "0" + seconds : seconds;
				countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
				time--;
				sessionStorage.setItem('secondsTime', time);

				if (hours == "0") {
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if (parseInt(time) <= -1) {
					async function sendButtonTrueTrain() {
						await axios
							.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
								userWhoTrainingId: parseInt(localStorage.getItem("id")),
								exercise: userNameTren,
								isDone: true,
								workoutTime: time_1
							})
						sessionStorage.setItem('flagTren', 0);
						window.location.href = '/profile';
					}
					sendButtonTrueTrain();
				}
			}
			updateCountDown();
			setInterval(updateCountDown, 1000);


		} else if (this.isOpen == "2") {
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
						sessionStorage.setItem('flagTren', 0);
						window.location.href = '/profile';
    				}
					sendButtonTrueTrainNogi();
				}
			}
			updateCountDown();
			setInterval(updateCountDown, 1000);


		} else if (this.isOpen == "3") {
			this.start_time = parseInt(sessionStorage.getItem('itog_time'));
			let time = sessionStorage.getItem('secondsTimeOtjimaniy');
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
				sessionStorage.setItem('secondsTimeOtjimaniy', time);

				if(hours=="0"){
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if(parseInt(time) <= -1) {
					async function sendButtonTrueTrainOtg() {
						await axios
    						.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
								userWhoTrainingId: parseInt(localStorage.getItem("id")),
  								exercise: "отжимания",
								isDone: true,
								workoutTime: time_1
							})
						sessionStorage.setItem('flagTren', 0);
						window.location.href = '/profile';
    				}
					sendButtonTrueTrainOtg();
				}
			}
			updateCountDown();
			setInterval(updateCountDown, 1000);


		} else if (this.isOpen == "4") {
			this.start_time = parseInt(sessionStorage.getItem('itog_time'));
			let time = sessionStorage.getItem('secondsTimePodtygivaniy');
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
				sessionStorage.setItem('secondsTimePodtygivaniy', time);

				if(hours=="0"){
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if(parseInt(time) <= -1) {
					async function sendButtonTrueTrainPodt() {
						await axios
    						.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
								userWhoTrainingId: parseInt(localStorage.getItem("id")),
  								exercise: "подтягивания",
								isDone: true,
								workoutTime: time_1
							})
						sessionStorage.setItem('flagTren', 0);
						window.location.href = '/profile';
    				}
					sendButtonTrueTrainPodt();
				}
			}
			updateCountDown();
			setInterval(updateCountDown, 1000);
		} else if (this.isOpen == "5") {
			this.start_time = parseInt(sessionStorage.getItem('itog_time'));
			let time = sessionStorage.getItem('secondsTimePress');
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
				sessionStorage.setItem('secondsTimePress', time);

				if(hours=="0"){
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if(parseInt(time) <= -1) {
					async function sendButtonTrueTrainPress() {
						await axios
    						.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
								userWhoTrainingId: parseInt(localStorage.getItem("id")),
  								exercise: "пресс",
								isDone: true,
								workoutTime: time_1
							})
						sessionStorage.setItem('flagTren', 0);
						window.location.href = '/profile';
    				}
					sendButtonTrueTrainPress();
				}
			}
			updateCountDown();
			setInterval(updateCountDown, 1000);
		}
	},

	methods: {
		async sendButtonFalseTrainPress() {
			await axios
    			.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
					userWhoTrainingId: parseInt(localStorage.getItem("id")),
  					exercise: "пресс",
					isDone: false,
					workoutTime: this.start_time
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
		async sendButtonFalseTrainPodt() {
			await axios
    			.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
					userWhoTrainingId: parseInt(localStorage.getItem("id")),
  					exercise: "подтягивания",
					isDone: false,
					workoutTime: this.start_time
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
		async sendButtonFalseTrainOtg() {
			await axios
    			.post('http://localhost:63002/api/Workouts/AddWorkoutPlan/', {
					userWhoTrainingId: parseInt(localStorage.getItem("id")),
  					exercise: "отжимания",
					isDone: false,
					workoutTime: this.start_time
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
				sessionStorage.setItem('flagTren', 0);
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
    	},
		async sendButtonFalseTrain() {
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
				window.location.href = '/profile';
				sessionStorage.setItem('flagTren', 0);
			}
			else {
				console.log(this.info)
			}
		},
		openPopup() {
			this.isPopup = true;
			if(this.openPopup){
				document.documentElement.style.overflow = 'hidden'
				sessionStorage.setItem('flagTren', 0);
				return
			}
		},
		openPopupOtjimaniy() {
			this.isPopupOtjimaniy = true;
			if(this.openPopupOtjimaniy){
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		openPopupPodtygivaniy() {
			this.isPopupPodtygivaniy = true;
			if(this.openPopupPodtygivaniy){
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		openPopupPress() {
			this.isPopupPress = true;
			if(this.openPopupPress){
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		openPopupNaNogi() {
			this.isPopupNaNogi = true;
			if(this.openPopupNaNogi){
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		closePopup() {
			this.isPopup = false;
			this.isPopupOtjimaniy = false;
			this.isPopupPodtygivaniy = false;
			this.isPopupPress = false;
			this.isPopupNaNogi = false;
			if(this.closePopup){
				document.documentElement.style.overflow = 'auto'
				return
			}
		},
	},
}
</script>