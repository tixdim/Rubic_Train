<template>
	<div class="wrapper">
		<header-form-components />
		<main class="page">
			<div class="login">
				<div class="login__container _container">
					<div class="login__items">
						<div class="login__title">Вход</div>
						<div class="login__wrapper-input">
							<input type="email" placeholder="Почта*" title="Введите в это поле ввода свой электронный адрес."
								class="login__input _email-auth">
						</div>
						<div class="login__wrapper-input login__wrapper-input_password">
							<input type="password" placeholder="Пароль*" pattern="(.{6,})"
								title="Пароль должен содержать не менее 6-ти символов." class="login__input _password-pass"
								v-model="password" v-show="!showPass">
							<input type="text" placeholder="Пароль*" pattern="(.{6,})"
								title="Пароль должен содержать не менее 6-ти символов." class="login__input _password-text"
								v-model="password" v-show="showPass">
							<div class="login__password" @click="showPass = !showPass">
								<transition name="password">
									<div v-show="!showPass" title="Показать пароль." class="login__password-img"><img
											src="../assets/img/homepage/eyes.svg" alt=""></div>
								</transition>
								<transition name="password_active">
									<div v-show="showPass" title="Скрыть пароль." class="login__password-img-active"><img
											src="../assets/img/homepage/eyes-active.svg" alt=""></div>
								</transition>
							</div>
						</div>
						<button class="login__button btn" @click="sendButtonAuth">
							<div class="btn-txt">Войти</div>
						</button>
						<div class="login__text">У вас нет аккаунта?<router-link to="/registration" class="login__green-txt">
								Регистрация</router-link>
						</div>
					</div>
				</div>
			</div>
		</main>
		<transition name="modal">
			<div v-if="isPopupMessage" @closePopup="closePopup" class="popup popup-message">
				<div class="popup__content">
					<div class="popup__body popup__body-message">
						<div class="popup__items">
							<div class="popup__title popup__title-message">{{ text }}</div>
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

<script >
import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'loginPage',
	components: {
		headerFormComponents,
		footerComponents,
	},

	data() {
		return {
			text: "",
			isPopupMessage: false,
			showPass: false,
			Pass: "",
			info: null,
			avatarUrl: localStorage.getItem("avatarUrl"),
		}
	},

	created() {
		localStorage.setItem("email", "")
		localStorage.setItem("nickname", "")
		localStorage.setItem("isBoy", "")
		localStorage.setItem("name", "")
		localStorage.setItem("surname", "")
		localStorage.setItem("id", "")
		localStorage.setItem("dateRegistration", "")
	},

	methods: {
		async sendButtonAuth() {
			if (this.showPass == true) {
				this.Pass = document.querySelector("._password-text").value
			}
			else {
				this.Pass = document.querySelector("._password-pass").value
			}

			await axios
				.post('http://localhost:63002/api/Users/Authentication', {
					email: document.querySelector("._email-auth").value,
					password: this.Pass,
				})
				.then((response) => (this.info = response))
				.catch(error => {
					this.text = error["response"]["data"];
					this.isPopupMessage = true;
					if (this.isPopupMessage) {
						document.documentElement.style.overflow = 'hidden'
						return
					}
				});

			if (this.info["status"] == 200) {
				if (this.avatarUrl == "") {
					this.avatarUrl = 1;
				}
				localStorage.setItem("email", this.info["data"]["email"])
				localStorage.setItem("nickname", this.info["data"]["nickname"])
				localStorage.setItem("isBoy", this.info["data"]["isBoy"])
				localStorage.setItem("name", this.info["data"]["name"])
				localStorage.setItem("surname", this.info["data"]["surname"])
				localStorage.setItem("id", this.info["data"]["id"])
				localStorage.setItem("avatarUrl", this.avatarUrl)
				localStorage.setItem("dateRegistration", this.info["data"]["dateRegistration"])
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
		},
		closePopup() {
			this.isPopupMessage = false;
			if (this.closePopup) {
				document.documentElement.style.overflow = 'auto'
				return
			}
		}
	},

	mounted () {
		document.addEventListener('keydown', function (e) {
			if (e.code == 'Enter') {
				this.sendButtonAuth();
			}
		});
	},
}
</script>