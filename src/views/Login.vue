<template>
	<div class="wrapper">
		<header-form-components/>
		<main class="page">
			<div class="login">
				<div class="login__container _container">
					<div class="login__items">
						<div class="login__title">Вход</div>
						<div class="login__wrapper-input">
							<input type="text" placeholder="Почта*" title="Введите в это поле ввода свой электронный адрес." class="login__input _email-auth">
						</div>
						<div class="login__wrapper-input login__wrapper-input_password">
							<input type="password" placeholder="Пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="login__input _password-pass" v-model="password" v-show="!showPass">
							<input type="text" placeholder="Пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="login__input _password-text" v-model="password" v-show="showPass">
							<div class="login__password" @click="showPass = !showPass">
								<transition name="password"><div v-show="!showPass" title="Показать пароль." class="login__password-img"><img src="../assets/img/homepage/eyes.svg" alt=""></div></transition>
								<transition name="password_active"><div v-show="showPass" title="Скрыть пароль." class="login__password-img-active"><img src="../assets/img/homepage/eyes-active.svg" alt=""></div></transition>
							</div>
						</div>
						<button type="submit" class="login__button btn" @click="sendButtonAuth">
							<div class="btn-txt">Войти</div>
						</button>
						<div class="login__text">У вас нет аккаунта?<router-link to="/registration" class="login__green-txt">Регистрация</router-link></div>
						<router-link to="/password" class="login__forgot-password">Забыли пароль?</router-link>
					</div>
				</div>
			</div>
		</main>
		<footer-components/>
	</div>
</template>

<script >
import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'loginPage',
	data() {
		return {
			showPass: false,
			Pass: "",
			info: null,
		}
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
        			console.log(error["response"]["data"]);
      			});

			if (this.info["status"] == 200) {
				localStorage.setItem("email", this.info["data"]["email"])
				localStorage.setItem("nickname", this.info["data"]["nickname"])
				localStorage.setItem("isBoy", this.info["data"]["isBoy"])
				localStorage.setItem("name", this.info["data"]["name"])
				localStorage.setItem("surname", this.info["data"]["surname"])
				localStorage.setItem("id", this.info["data"]["id"])
				localStorage.setItem("dateRegistration", this.info["data"]["dateRegistration"])
				localStorage.setItem("avatarUrl", this.info["data"]["avatarUrl"])
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
    	},
	},
	components: {
		headerFormComponents,
		footerComponents,
	},
}
</script>