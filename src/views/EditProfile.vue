<template>
	<div class="wrapper">
		<header-components/>
		<main class="page">
			<div class="edit-profile">
				<div class="edit-profile__container _container">
					<div class="edit-profile__items">
						<div class="edit-profile__title">Редактировать</div>
						<div class="edit-profile__wrapper-input">
							<input type="text" placeholder="Имя*" class="edit-profile__input _name-edit">
						</div>
						<div class="edit-profile__wrapper-input">
							<input type="text" placeholder="Фамилия*" class="edit-profile__input _surname-edit">
						</div>
						<div class="edit-profile__wrapper-input">
							<input type="text" placeholder="Логин*" class="edit-profile__input _nickname-edit">
						</div>
						<router-link to="/profile" class="edit-profile__back-registration">
							<div class="edit-profile__white-txt _icon-arrow">Вернуться в профиль</div>
						</router-link>
						<button type="submit" class="edit-profile__button btn" @click="sendButtonEditProf">
							<div class="btn-txt">Редактировать</div>
						</button>
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
	name: 'editProfilePage',
	components: {
		headerComponents,
		footerComponents,
	},

	created() {
		if (this.id == "" || this.email == "" || this.nickname == "" || this.isBoy == "" || this.name == "" || this.surname == "" || this.dateRegistration == "" || this.avatarUrl == "") {
			window.location.href = '/';
		}
	},

	data() {
		return {
			info: null,
			id: 0,
			isBoy: false
		}
	},
	methods: {
		async sendButtonEditProf() {
			this.id = localStorage.getItem("id")
			this.isBoy = (localStorage.getItem("isBoy").toLowerCase() === 'true');

			await axios
				.patch('http://localhost:63002/api/Users/UpdateUser/' + this.id, {
					nickname: document.querySelector("._nickname-edit").value,
					name: document.querySelector("._name-edit").value,
					surname: document.querySelector("._surname-edit").value,
					isBoy: this.isBoy
				})
				.then((response) => (this.info = response))
				.catch(error => {
					console.log(error["response"]["data"]);
				});

			console.log(this.info)

			if (this.info["status"] == 200) {
				localStorage.setItem("email", this.info["data"]["email"])
				localStorage.setItem("nickname", this.info["data"]["nickname"])
				localStorage.setItem("isBoy", this.info["data"]["isBoy"])
				localStorage.setItem("name", this.info["data"]["name"])
				localStorage.setItem("surname", this.info["data"]["surname"])
				localStorage.setItem("id", this.info["data"]["id"])
				localStorage.setItem("dateRegistration", this.info["data"]["dateRegistration"])
				window.location.href = '/profile';
			}
			else {
				console.log(this.info)
			}
		},
	},
}
</script>