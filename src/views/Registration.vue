<template>
	<div class="wrapper">
		<header-form-components/>
		<main class="page">
			<div class="registration">
				<div class="registration__container _container">
					<div class="registration__items">
						<div class="registration__title">Регистрация</div>
						<div class="registration__wrapper-input">
							<input type="text" placeholder="Имя*" class="registration__input _name">
						</div>
						<div class="registration__wrapper-input">
							<input type="text" placeholder="Фамилия*" class="registration__input _surname">
						</div>
						<div class="registration__wrapper-input">
							<input type="text" placeholder="Логин*" class="registration__input _nickname">
						</div>
						<div class="registration__wrapper-input">
							<input type="email" placeholder="Почта*" title="Введите в это поле ввода свой электронный адрес." class="registration__input _email">
						</div>
						<div class="registration__wrapper-input registration__wrapper-input_password">
							<input type="password" placeholder="Пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _first-password-pass" v-model="password" v-show="!showPass">
							<input type="text" placeholder="Пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _first-password-text" v-model="password" v-show="showPass">
							<div class="registration__password" @click="showPass = !showPass">
								<transition name="password"><div v-show="!showPass" title="Показать пароль." class="registration__password-img"><img src="../assets/img/homepage/eyes.svg" alt=""></div></transition>
								<transition name="password"><div v-show="showPass" title="Скрыть пароль." class="registration__password-img-active"><img src="../assets/img/homepage/eyes-active.svg" alt=""></div></transition>
							</div>
						</div>
						<div class="registration__wrapper-input registration__wrapper-input_password">
							<input type="password" placeholder="Повторите пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _second-password-pass" v-model="passwordTwo" v-show="!showPassTwo">
							<input type="text" placeholder="Повторите пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="registration__input _second-password-text" v-model="passwordTwo" v-show="showPassTwo">
							<div class="registration__password" @click="showPassTwo = !showPassTwo">
								<transition name="password"><div v-show="!showPassTwo" title="Показать пароль." class="registration__password-img"><img src="../assets/img/homepage/eyes.svg" alt=""></div></transition>
								<transition name="password"><div v-show="showPassTwo" title="Скрыть пароль." class="registration__password-img-active"><img src="../assets/img/homepage/eyes-active.svg" alt=""></div></transition>
							</div>
						</div>
						<div class="registration__wrapper-input registration__wrapper-input_options">
							<div class="options">
								<label class="options__item">
									<input class="options__input _male" checked type="radio" value="man" name="form[option]">
									<span class="options__text"><span>Мужчина</span></span>
								</label>
								<label class="options__item">
									<input class="options__input" type="radio" value="female" name="form[option]">
									<span class="options__text"><span>Женщина</span></span>
								</label>
							</div>
						</div>
						<button type="submit" class="registration__button btn" @click="sendButtonReg">
							<div class="btn-txt">Регистрация</div>
						</button>
						<div class="registration__text">У вас есть аккаунт?<router-link to="/" class="registration__green-txt">Войти</router-link></div>
					</div>
				</div>
			</div>
		</main>
		<transition name="modal">
			<div v-if="isPopupMessage" @closePopup="closePopup" class="popup popup-message">
				<div class="popup__content">
					<div class="popup__body popup__body-message">
						<div class="popup__items">
							<div class="popup__title popup__title-message">{{text}}</div>
						</div>
						<div class="popup__cross" @click="closePopup">
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<footer-components/>
	</div>
</template>

<script>
import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'registrationPage',
	components: {
		headerFormComponents,
		footerComponents,
	},

	data() {
		return {
			text: "",
			isPopupMessage: false,
			showPass: false,
			showPassTwo: false,
			firstPass: "",
			secondPass: "",
			info: null,
		}
	},
	methods: {
		async sendButtonReg() {
			if (this.showPass == true) {
				this.firstPass = document.querySelector("._first-password-text").value
			}
			else {
				this.firstPass = document.querySelector("._first-password-pass").value
			}

			if (this.showPassTwo == true) {
				this.secondPass = document.querySelector("._second-password-text").value
			}
			else {
				this.secondPass = document.querySelector("._second-password-pass").value
			}

			await axios
				.post('http://localhost:63002/api/Users/Registration', {
					email: document.querySelector("._email").value,
					nickname: document.querySelector("._nickname").value,
					firstPassword: this.firstPass,
					secondPassword: this.secondPass,
					isBoy: document.querySelector("._male").checked,
					name: document.querySelector("._name").value,
					surname: document.querySelector("._surname").value
				})
				.then((response) => (this.info = response))
				.catch(error => {
					this.text = error["response"]["data"];
					this.isPopupMessage = true;
					if(this.isPopupMessage){
						document.documentElement.style.overflow = 'hidden'
						return
					}
					console.log(this.isPopupMessage);
					console.log(error["response"]["data"]);
				});

			if (this.info["status"] == 201) {
				window.location.href = '/';
			}
			else {
				console.log(this.info)
			}
		},
		closePopup() {
			this.isPopupMessage = false;
			if(this.closePopup){
				document.documentElement.style.overflow = 'auto'
				return
			}
		}
	}
}
</script>