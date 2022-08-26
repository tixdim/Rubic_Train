<template>
	<div class="wrapper">
		<header-components />
		<main class="page">
			<div class="profile">
				<div class="profile__container _container">
					<div class="profile__items">
						<div class="profile__item-box">
							<div class="profile__info-box">
								<button v-if="avatarUrl == 1" class="profile__img profile__img-main" @click="openPopupProfile">
									<img src="../assets/img/homepage/ava-1.png" alt="">
								</button>
								<button v-else-if="avatarUrl == 2" class="profile__img profile__img-main" @click="openPopupProfile">
									<img src="../assets/img/homepage/ava-2.png" alt="">
								</button>
								<button v-else-if="avatarUrl == 3" class="profile__img profile__img-main" @click="openPopupProfile">
									<img src="../assets/img/homepage/ava-3.png" alt="">
								</button>
								<button v-else-if="avatarUrl == 4" class="profile__img profile__img-main" @click="openPopupProfile">
									<img src="../assets/img/homepage/ava-4.png" alt="">
								</button>
								<button v-else-if="avatarUrl == 5" class="profile__img profile__img-main" @click="openPopupProfile">
									<img src="../assets/img/homepage/ava-5.png" alt="">
								</button>
								<div class="profile__box-total">
									<div class="profile__box-top">
										<div class="profile__box-title">
											<div class="profile__box-name">
												<div class="profile__name"> {{ name }} </div>
												<div class="profile__surname"> {{ surname }} </div>
											</div>
											<div class="profile__username"> {{ nickname }} </div>
											<div class="profile__email"> {{ email }} </div>
										</div>
									</div>
									<div class="profile__button-top">
										<router-link to="/edit-profile" class="profile__edit">
											<div class="profile__edit-txt">Редактировать</div>
										</router-link>
										<router-link to="/password-profile" class="profile__password-rename">
											<div class="profile__password-rename-txt">Сменить пароль</div>
										</router-link>
									</div>
									<div class="profile__button-bottom">
										<button class="profile__train" @click="add_tren">
											<div class="profile__train-txt">Добавить тренировку</div>
										</button>
										<button class="profile__train" @click="delete_all_tren">
											<div class="profile__train-txt">Удалить все тернировки</div>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="profile__item-box">
							<div v-if="countTrain === 0" class="profile__title">У вас ещё не было тренировок, советуем начать!</div>
							<div v-else class="profile__wrapper-card">
								<div class="profile__title">Ваши тренировки</div>
								<div class="profile__box-card">
									<div v-for="train in this.info" :key="train">
										<div v-if="train.isDone" class='profile__card profile-card _card-green'>
											<div v-if="train.exercise === 'отжимания'" class="profile-card__bg">
												<img src="../assets/img/homepage/tren-otjimaniy.jpg" alt="">
											</div>
											<div v-else-if="train.exercise === 'подтягивания'" class='profile-card__bg'>
												<img src="../assets/img/homepage/tren-podtygivaniy.jpg" alt="">
											</div>
											<div v-else-if="train.exercise === 'пресс'" class='profile-card__bg'>
												<img src="../assets/img/homepage/tren-press.jpg" alt="">
											</div>
											<div v-else-if="train.exercise === 'на ноги'" class='profile-card__bg'>
												<img src="../assets/img/homepage/tren-na-nogi.jpg" alt="">
											</div>
											<div v-else class='profile-card__bg'>
												<img src="../assets/img/homepage/tren.jpg" alt="">
											</div>
											<div class="profile-card__box-items">
												<div class="profile-card__box-title">
													<div class="profile-card__title">Тренировка {{ train.exercise }}</div>
													<div class="profile-card__sub-title">Добавлено:
														<span>{{ train.startWorkoutDate.split('-')[2].split("T")[0] }}.{{
																train.startWorkoutDate.split('-')[1]
														}}.{{ train.startWorkoutDate.split('-')[0] }}</span>
													</div>
													<div class="profile-card__box-cross">
														<a @click="deletTrain" class="profile-card__cross">
															<span></span>
															<div class="profile-card__cross-promt">Удалить тренировку</div>
															<span></span>
														</a>
													</div>
												</div>
												<div class="profile-card__info">
													<div class="profile-card__info-box">
														<div class="profile-card__info-title">Длительность тренировки:</div>
														<div v-if="((train.workoutTime / 60) % 10 === 1) && ((train.workoutTime / 60) % 100 != 11)"
															class="profile-card__info-text"> {{ train.workoutTime / 60 }} минута </div>
														<div v-else-if="(train.workoutTime / 60 === 2 && (train.workoutTime / 60) % 100 != 12) ||
														((train.workoutTime / 60) % 10 === 3 && (train.workoutTime / 60) % 100 != 13) ||
														((train.workoutTime / 60) % 10 === 4 && (train.workoutTime / 60) % 100 != 14)"
															class="profile-card__info-text"> {{ train.workoutTime / 60 }} минуты </div>
														<div v-else class="profile-card__info-text"> {{ train.workoutTime / 60 }} минут </div>
													</div>
													<div class="profile-card__info-box">
														<div class="profile-card__info-title">Статус тренировки:</div>
														<div class="profile-card__info-text">Выполнено</div>
													</div>
												</div>
											</div>
										</div>
										<div v-else class='profile__card profile-card _card-red'>
											<div v-if="train.exercise === 'отжимания'" class="profile-card__bg">
												<img src="../assets/img/homepage/tren-otjimaniy.jpg" alt="">
											</div>
											<div v-else-if="train.exercise === 'подтягивания'" class='profile-card__bg'>
												<img src="../assets/img/homepage/tren-podtygivaniy.jpg" alt="">
											</div>
											<div v-else-if="train.exercise === 'пресс'" class='profile-card__bg'>
												<img src="../assets/img/homepage/tren-press.jpg" alt="">
											</div>
											<div v-else-if="train.exercise === 'на ноги'" class='profile-card__bg'>
												<img src="../assets/img/homepage/tren-na-nogi.jpg" alt="">
											</div>
											<div v-else class='profile-card__bg'>
												<img src="../assets/img/homepage/tren.jpg" alt="">
											</div>
											<div class="profile-card__box-items">
												<div class="profile-card__box-title">
													<div class="profile-card__title">Тренировка {{ train.exercise }}</div>
													<div class="profile-card__sub-title">Добавлено:
														<span>{{ train.startWorkoutDate.split('-')[2].split("T")[0] }}.{{
																train.startWorkoutDate.split('-')[1]
														}}.{{ train.startWorkoutDate.split('-')[0] }}</span>
													</div>
												</div>
												<div class="profile-card__info">
													<div class="profile-card__info-box">
														<div class="profile-card__info-title">Длительность тренировки:</div>
														<div v-if="((train.workoutTime / 60) % 10 === 1) && ((train.workoutTime / 60) % 100 != 11)"
															class="profile-card__info-text"> {{ train.workoutTime / 60 }} минута </div>
														<div v-else-if="(train.workoutTime / 60 === 2 && (train.workoutTime / 60) % 100 != 12) ||
														((train.workoutTime / 60) % 10 === 3 && (train.workoutTime / 60) % 100 != 13) ||
														((train.workoutTime / 60) % 10 === 4 && (train.workoutTime / 60) % 100 != 14)"
															class="profile-card__info-text"> {{ train.workoutTime / 60 }} минуты </div>
														<div v-else class="profile-card__info-text"> {{ train.workoutTime / 60 }} минут </div>
													</div>
													<div class="profile-card__info-box">
														<div class="profile-card__info-title">Статус тренировки:</div>
														<div class="profile-card__info-text">Не выполнено</div>
													</div>
												</div>
											</div>
											<div class="profile-card__box-cross">
												<a @click="deletTrain" class="profile-card__cross">
													<span></span>
													<div class="profile-card__cross-promt">Удалить тренировку</div>
													<span></span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<transition name="modal">
			<div v-if="isPopupProfile" @closePopup="closePopup" class="popup popup-profile">
				<div class="popup__content">
					<div class="popup__body popup__body-profile">
						<div class="popup__items popup__items-profile">
							<div v-if="avatarUrl == 1" @closePopup="closePopup">
								<button class="profile__img profile__img-active" @click="change_img1">
									<img src="../assets/img/homepage/ava-1.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>
							<div v-else @closePopup="closePopup">
								<button class="profile__img" @click="change_img1">
									<img src="../assets/img/homepage/ava-1.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>

							<div v-if="avatarUrl == 2" @closePopup="closePopup">
								<button class="profile__img profile__img-active" @click="change_img2">
									<img src="../assets/img/homepage/ava-2.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>
							<div v-else @closePopup="closePopup">
								<button class="profile__img" @click="change_img2">
									<img src="../assets/img/homepage/ava-2.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>

							<div v-if="avatarUrl == 3" @closePopup="closePopup">
								<button class="profile__img profile__img-active" @click="change_img3">
									<img src="../assets/img/homepage/ava-3.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>
							<div v-else @closePopup="closePopup">
								<button class="profile__img" @click="change_img3">
									<img src="../assets/img/homepage/ava-3.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>

							<div v-if="avatarUrl == 4" @closePopup="closePopup">
								<button class="profile__img profile__img-active" @click="change_img4">
									<img src="../assets/img/homepage/ava-4.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>
							<div v-else @closePopup="closePopup">
								<button class="profile__img" @click="change_img4">
									<img src="../assets/img/homepage/ava-4.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>

							<div v-if="avatarUrl == 5" @closePopup="closePopup">
								<button class="profile__img profile__img-active" @click="change_img5">
									<img src="../assets/img/homepage/ava-5.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
								</button>
							</div>
							<div v-else @closePopup="closePopup">
								<button class="profile__img" @click="change_img5">
									<img src="../assets/img/homepage/ava-5.png" alt="">
									<div class="profile__img-check">
										<div class="profile__img-stick-1"></div>
										<div class="profile__img-stick-2"></div>
									</div>
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
		</transition>
		<footer-components />
	</div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'profilePage',
	components: {
		headerComponents,
		footerComponents,
	},

	data() {
		return {
			isPopupProfile: false,
			info: null,
			id: 0,
			email: "",
			nickname: "",
			isBoy: true,
			name: "",
			surname: "",
			dateRegistration: "",
			avatarUrl: 0,
			countTrain: 0
		}
	},
	created() {
		this.id = localStorage.getItem("id");
		this.email = localStorage.getItem("email");
		this.nickname = localStorage.getItem("nickname");
		this.isBoy = localStorage.getItem("isBoy");
		this.name = localStorage.getItem("name");
		this.surname = localStorage.getItem("surname");
		this.dateRegistration = localStorage.getItem("dateRegistration");
		this.avatarUrl = localStorage.getItem("avatarUrl");
	},

	async mounted() {
		await axios
			.get('http://localhost:63002/api/Workouts/GetWorkoutCount/' + this.id)
			.then((response) => (this.countTrain = response["data"]))
			.catch(error => {
				console.log(error["response"]["data"]);
			});

		await axios
			.get('http://localhost:63002/api/Workouts/GetAllWorkoutPlans/' + this.id + '/' + this.countTrain + '/0')
			.then((response) => (this.info = response["data"]))
			.catch(error => {
				console.log(error["response"]["data"]);
			});
	},

	methods: {
		async delete_all_tren() {
			await axios
    			.delete('http://localhost:63002/api/Workouts/DeleteAllWorkoutPlan/' + this.id)
				.catch(error => {
        			console.log(error["response"]["data"]);
      			});
			window.location.href = '/profile';
		},
		async add_tren() {
			sessionStorage.setItem('flagTren', 0);
			window.location.href = '/main-page';
		},
		async deletTrain() {
			console.log(this.info);
		},
		openPopupProfile() {
			this.isPopupProfile = true;
			if (this.openPopupProfile) {
				document.documentElement.style.overflow = 'hidden'
				return
			}
		},
		closePopup() {
			this.isPopupProfile = false;
			if (this.closePopup) {
				document.documentElement.style.overflow = 'auto'
				return
			}
		},
		change_img1() {
			this.avatarUrl = 1;
			localStorage.setItem("avatarUrl", this.avatarUrl)
			this.closePopup();
		},
		change_img2() {
			this.avatarUrl = 2;
			localStorage.setItem("avatarUrl", this.avatarUrl)
			this.closePopup();
		},
		change_img3() {
			this.avatarUrl = 3;
			localStorage.setItem("avatarUrl", this.avatarUrl)
			this.closePopup();
		},
		change_img4() {
			this.avatarUrl = 4;
			localStorage.setItem("avatarUrl", this.avatarUrl)
			this.closePopup();
		},
		change_img5() {
			this.avatarUrl = 5;
			localStorage.setItem("avatarUrl", this.avatarUrl)
			this.closePopup();
		}
	}
}
</script>