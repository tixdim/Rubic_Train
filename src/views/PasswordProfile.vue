<template>
	<div class="wrapper">
		<header-components/>
		<main class="page">
			<div class="password-profile">
				<div class="password-profile__container _container">
					<div class="password-profile__items">
						<div class="password-profile__title">Обновление пароля</div>
						<div class="password-profile__item-wrap">
							<div class="password-profile__wrapper-input ">
								<input type="password" placeholder="Старый пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="password-profile__input _first-password-pass" v-model="password" v-show="!showPass">
								<input type="text" placeholder="Старый пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="password-profile__input _first-password-text" v-model="password" v-show="showPass">
								<div class="password-profile__password" @click="showPass = !showPass">
									<transition name="password"><div v-show="!showPass" title="Показать пароль." class="password-profile__password-img"><img src="../assets/img/homepage/eyes.svg" alt=""></div></transition>
									<transition name="password"><div v-show="showPass" title="Скрыть пароль." class="password-profile__password-img-active"><img src="../assets/img/homepage/eyes-active.svg" alt=""></div></transition>
								</div>
							</div>
							<div class="password-profile__wrapper-input ">
								<input type="password" placeholder="Новый пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="password-profile__input _second-password-pass" v-model="passwordTwo" v-show="!showPassTwo">
								<input type="text" placeholder="Новый пароль*" pattern="(.{6,})" title="Пароль должен содержать не менее 6-ти символов." class="password-profile__input _second-password-text" v-model="passwordTwo" v-show="showPassTwo">
								<div class="password-profile__password" @click="showPassTwo = !showPassTwo">
									<transition name="password"><div v-show="!showPassTwo" title="Показать пароль." class="password-profile__password-img"><img src="../assets/img/homepage/eyes.svg" alt=""></div></transition>
									<transition name="password"><div v-show="showPassTwo" title="Скрыть пароль." class="password-profile__password-img-active"><img src="../assets/img/homepage/eyes-active.svg" alt=""></div></transition>
								</div>
							</div>
							<router-link to="/profile" class="password-profile__back-registration">
								<div class="password-profile__white-txt _icon-arrow">Вернуться в профиль</div>
							</router-link>
							<button type="submit" class="password-profile__button btn" @click="sendButtonEditPass">
								<div class="btn-txt">Отправить</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
		<footer-components/>
	</div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'passwordProfilePage',
	data() {
		return {
			showPass: false,
			showPassTwo: false,
			firstPass: "",
			secondPass: "",
			info: null,
			id: 0,
		}
	},
	methods: {
		async sendButtonEditPass() {
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
			
			this.id = localStorage.getItem("id")

			console.log(this.id)

			await axios
    			.patch('http://localhost:63002/api/Users/UpdatePasswordWithOldUser/' + this.id, {
					oldPassword: this.firstPass,
  					newPassword: this.secondPass
				})
    			.then((response) => (this.info = response))
				.catch(error => {
        			console.log(error["response"]["data"]);
      			});

			console.log(this.info)
			console.log(this.id)

			if (this.info["status"] == 200) {
				localStorage.setItem("id", this.info["data"]["id"])
				localStorage.setItem("email", this.info["data"]["email"])
				localStorage.setItem("nickname", this.info["data"]["nickname"])
				localStorage.setItem("isBoy", this.info["data"]["isBoy"])
				localStorage.setItem("name", this.info["data"]["name"])
				localStorage.setItem("surname", this.info["data"]["surname"])
				localStorage.setItem("dateRegistration", this.info["data"]["dateRegistration"])
				localStorage.setItem("avatarUrl", this.info["data"]["avatarUrl"])
				//window.location.href = '/profile';

			}
			else {
				console.log(this.info)
			}
    	},
	},
	components: {
		headerComponents,
		footerComponents,
	}
}
</script>