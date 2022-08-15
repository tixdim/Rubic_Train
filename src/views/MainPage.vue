<template>
	<div class="wrapper" v-on:keyup.escape="closePopup">
		<header-components/>
		<main class="page">
			<div class="main-page">
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
			isPopup: false,
			isPopupOtjimaniy: false,
			isPopupPodtygivaniy: false,
			isPopupPress: false,
			isPopupNaNogi: false,
		}
	},
	methods: {
		openPopup() {
			this.isPopup = true;
			if(this.openPopup){
				document.documentElement.style.overflow = 'hidden'
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