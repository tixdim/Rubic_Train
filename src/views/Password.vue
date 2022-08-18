<template>
	<div class="wrapper">
		<header-form-components/>
		<main class="page">
			<div class="password">
				<div class="password__container _container">
					<div class="password__items">
						<div class="password__title">Восстановление пароля</div>
						<div class="password__sub-title">Введите новый пароль, чтобы восстановить его</div>
						<div class="password__item-wrap">
							<div class="password__wrapper-input ">
								<input type="password" placeholder="Новый пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="password__input _password-pass" v-model="password" v-show="!showPass">
								<input type="text" placeholder="Новый пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="password__input _password-text" v-model="password" v-show="showPass">
								<div class="password__password" @click="showPass = !showPass">
									<transition name="password"><div v-show="!showPass" title="Показать пароль." class="password__password-img"><img src="../assets/img/homepage/eyes.svg" alt=""></div></transition>
									<transition name="password"><div v-show="showPass" title="Скрыть пароль." class="password__password-img-active"><img src="../assets/img/homepage/eyes-active.svg" alt=""></div></transition>
								</div>
							</div>
							<router-link to="/" class="password__back-registration">
								<div class="password__white-txt _icon-arrow">Вернуться в форму авторизации</div>
							</router-link>
							<button type="submit" class="password__button btn" @click="sendButtonNewPass">
								<div class="btn-txt">Отправить</div>
							</button>
							<div class="password__text">У вас нет аккаунта?<router-link to="/registration" class="password__green-txt">Регистрация</router-link></div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<footer-components/>
	</div>
</template>

<script>
import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'

export default {
	name: 'passwordPage',
	components: {
		headerFormComponents,
		footerComponents,
	},

	data() {
		return {
			showPass: false,
			Pass: ""
		}
	},
	methods: {
		async sendButtonNewPass() {
			if (this.showPass == true) {
				this.Pass = document.querySelector("._password-text").value
			}
			else {
				this.Pass = document.querySelector("._password-pass").value
			}

			console.log(this.info);

			await axios
				.post('http://localhost:63002/api/Users/UpdatePasswordWithNewUser/', {userId: this.userID}, {
					newPassword: this.Pass,
				})
				.then((response) => (this.info = response))
				.catch(error => {
					console.log(error["response"]["data"]);
				});

			if (this.info["status"] == 200 || this.info["status"] == 201) {
				window.location.href = '/';
			}

			console.log(this.info)
		}
	},
}
</script>