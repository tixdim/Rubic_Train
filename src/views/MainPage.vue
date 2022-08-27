<template>
	<div class="wrapper" v-on:keyup.escape="closePopup">
		<header class="header">
			<div class="header__container _container">
				<div class="header__items">
					<a @click="perehod_in_prof" class="header__logo">rubicone</a>
					<button @click="exit" class="header__btn"><div class="header__btn-txt">Выйти</div></button>
				</div>
			</div>
		</header>
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
										<div class="main-page-card__info-text">Я отжимаюсь до тех, пор пока не чувствую боль, а затем делаю
											ещё десять раз!</div>
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
										<div class="main-page-card__info-text">Цель тренировок — подтягивать ослабленное, укреплять тело и
											шлифовать дух.</div>
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
							<button class="main-page__card main-page-card__new" @click="openPopup">
								<div class="main-page-card__bg">
									<img src="../assets/img/homepage/tren.jpg" alt="">
								</div>
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
										<div class="card-page-card__info-text">Разум всегда сдается первым, не тело. Секрет в том, чтобы
											заставить твой разум работать на тебя, а не против тебя.</div>
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
										<div class="card-page-card__info-text">Я отжимаюсь до тех, пор пока не чувствую боль, а затем делаю
											ещё десять раз!</div>
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
										<div class="card-page-card__info-text">Цель тренировок — подтягивать ослабленное, укреплять тело и
											шлифовать дух.</div>
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
		<transition name="modal">
			<popup-card-otjimaniy v-if="isPopupOtjimaniy" @closePopup="closePopup"></popup-card-otjimaniy>
		</transition>
		<transition name="modal">
			<popup-card-podtygivaniy v-if="isPopupPodtygivaniy" @closePopup="closePopup"></popup-card-podtygivaniy>
		</transition>
		<transition name="modal">
			<popup-card-press v-if="isPopupPress" @closePopup="closePopup"></popup-card-press>
		</transition>
		<transition name="modal">
			<popup-card-na-nogi v-if="isPopupNaNogi" @closePopup="closePopup"></popup-card-na-nogi>
		</transition>
		<transition name="modal">
			<popup-card v-if="isPopup" @closePopup="closePopup"></popup-card>
		</transition>

		<transition name="modal">
			<popup-lose v-if="isPopupLose" @closePopup="closePopup"></popup-lose>
		</transition>
		<transition name="modal">
			<popup-lose-na-nogi v-if="isPopupLoseNaNogi" @closePopup="closePopup"></popup-lose-na-nogi>
		</transition>
		<transition name="modal">
			<popup-lose-otjimaniy v-if="isPopupLoseOtjimaniy" @closePopup="closePopup"></popup-lose-otjimaniy>
		</transition>
		<transition name="modal">
			<popup-lose-podtygivaniy v-if="isPopupLosePodtygivaniy" @closePopup="closePopup"></popup-lose-podtygivaniy>
		</transition>
		<transition name="modal">
			<popup-lose-press v-if="isPopupLosePress" @closePopup="closePopup"></popup-lose-press>
		</transition>

		<transition name="modal">
			<popup-tren-header-rubic v-if="isPopupTrenHeaderRubic" @closePopup="closePopup"></popup-tren-header-rubic>
		</transition>
		<transition name="modal">
			<popup-tren-header-exit v-if="isPopupTrenHeaderExit" @closePopup="closePopup"></popup-tren-header-exit>
		</transition>
		<footer-components />
	</div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'
import popupLose from '../components/popup-lose'
import popupLoseNaNogi from '../components/popup-lose-na-nogi'
import popupLoseOtjimaniy from '../components/popup-lose-otjimaniy'
import popupLosePodtygivaniy from '../components/popup-lose-podtygivaniy'
import popupLosePress from '../components/popup-lose-press'
import popupTrenHeaderRubic from '../components/popup-tren-header-rubic'
import popupTrenHeaderExit from '../components/popup-tren-header-exit'
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
		popupTrenHeaderRubic,
		popupTrenHeaderExit,

		popupLose,
		popupLoseNaNogi,
		popupLoseOtjimaniy,
		popupLosePodtygivaniy,
		popupLosePress,

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

			isPopupLose: false,
			isPopupLoseNaNogi: false,
			isPopupLoseOtjimaniy: false,
			isPopupLosePodtygivaniy: false,
			isPopupLosePress: false,

			isPopupTrenHeaderRubic: false,
			isPopupTrenHeaderExit: false,

			isOpen: sessionStorage.getItem('flagTren')
		}
	},

	created() {
		let id = localStorage.getItem("id");
		let email = localStorage.getItem("email");
		let nickname = localStorage.getItem("nickname");
		let isBoy = localStorage.getItem("isBoy");
		let name = localStorage.getItem("name");
		let surname = localStorage.getItem("surname");
		let dateRegistration = localStorage.getItem("dateRegistration");
		if (id == "" || email == "" || nickname == "" || isBoy == "" || name == "" || surname == "" || dateRegistration == "") {
			window.location.href = '/';
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
				let minutesNull = minutes < 10 ? "0" + minutes : minutes;
				let secondsNull = seconds < 10 ? "0" + seconds : seconds;
				countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
				time--;
				sessionStorage.setItem('secondsTimeNaNogi', time);

				if (hours == "0") {
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if (parseInt(time) <= -1) {
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
				let minutesNull = minutes < 10 ? "0" + minutes : minutes;
				let secondsNull = seconds < 10 ? "0" + seconds : seconds;
				countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
				time--;
				sessionStorage.setItem('secondsTimeOtjimaniy', time);

				if (hours == "0") {
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if (parseInt(time) <= -1) {
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
				let minutesNull = minutes < 10 ? "0" + minutes : minutes;
				let secondsNull = seconds < 10 ? "0" + seconds : seconds;
				countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
				time--;
				sessionStorage.setItem('secondsTimePodtygivaniy', time);

				if (hours == "0") {
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if (parseInt(time) <= -1) {
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
				let minutesNull = minutes < 10 ? "0" + minutes : minutes;
				let secondsNull = seconds < 10 ? "0" + seconds : seconds;
				countDown.innerHTML = `${hours}:${minutesNull}:${secondsNull}`;
				time--;
				sessionStorage.setItem('secondsTimePress', time);

				if (hours == "0") {
					countDown.innerHTML = `${minutes}:${secondsNull}`;
				};

				if (parseInt(time) <= -1) {
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
		async perehod_in_prof() {
			if (this.isOpen == "1" || this.isOpen == "2" || this.isOpen == "3" || this.isOpen == "4" || this.isOpen == "5") {
				this.isPopupTrenHeaderRubic = true;
				if (this.perehod_in_prof) {
					document.documentElement.style.overflow = 'hidden'
					return
				}
			}
			else {
				window.location.href = '/profile';
			}
		},
		async exit() {
			if (this.isOpen == "1" || this.isOpen == "2" || this.isOpen == "3" || this.isOpen == "4" || this.isOpen == "5") {
				this.isPopupTrenHeaderExit = true;
				if (this.exit) {
					document.documentElement.style.overflow = 'hidden'
					return
				}
			}
			else {
				localStorage.setItem("email", "")
				localStorage.setItem("nickname", "")
				localStorage.setItem("isBoy", "")
				localStorage.setItem("name", "")
				localStorage.setItem("surname", "")
				localStorage.setItem("id", "")
				localStorage.setItem("dateRegistration", "")
				window.location.href = '/';
			}
		},
		async sendButtonFalseTrainPress() {
			this.isPopupLosePress = true;
			if (this.sendButtonFalseTrainPress) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		async sendButtonFalseTrainPodt() {
			this.isPopupLosePodtygivaniy = true;
			if (this.sendButtonFalseTrainPodt) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		async sendButtonFalseTrainOtg() {
			this.isPopupLoseOtjimaniy = true;
			if (this.sendButtonFalseTrainOtg) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		async sendButtonFalseTrainNogi() {
			this.isPopupLoseNaNogi = true;
			if (this.sendButtonFalseTrainNogi) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		async sendButtonFalseTrain() {
			this.isPopupLose = true;
			if (this.sendButtonFalseTrain) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		openPopup() {
			this.isPopup = true;
			if (this.openPopup) {
				document.documentElement.style.overflow = 'hidden'
				sessionStorage.setItem('flagTren', 0);
				return
			}
		},
		openPopupOtjimaniy() {
			this.isPopupOtjimaniy = true;
			if (this.openPopupOtjimaniy) {
				document.documentElement.style.overflow = 'hidden'
				sessionStorage.setItem('flagTren', 0);
				return
			}
		},
		openPopupPodtygivaniy() {
			this.isPopupPodtygivaniy = true;
			if (this.openPopupPodtygivaniy) {
				document.documentElement.style.overflow = 'hidden'
				sessionStorage.setItem('flagTren', 0);
				return
			}
		},
		openPopupPress() {
			this.isPopupPress = true;
			if (this.openPopupPress) {
				document.documentElement.style.overflow = 'hidden'
				sessionStorage.setItem('flagTren', 0);
				return
			}
		},
		openPopupNaNogi() {
			this.isPopupNaNogi = true;
			if (this.openPopupNaNogi) {
				document.documentElement.style.overflow = 'hidden'
				sessionStorage.setItem('flagTren', 0);
				return
			}
		},
		closePopup() {
			this.isPopup = false;
			this.isPopupOtjimaniy = false;
			this.isPopupPodtygivaniy = false;
			this.isPopupPress = false;
			this.isPopupNaNogi = false;

			this.isPopupLose = false;
			this.isPopupLoseNaNogi = false;
			this.isPopupLoseOtjimaniy = false;
			this.isPopupLosePodtygivaniy = false;
			this.isPopupLosePress = false;

			this.isPopupTrenHeaderRubic = false;
			this.isPopupTrenHeaderExit = false;

			if (this.closePopup) {
				document.documentElement.style.overflow = 'auto'
				return
			}
		},
	},
}
</script>