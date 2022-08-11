<template>
	<div class="wrapper">
		<header-form-components/>
			<button type="submit" class="registration__button btn" @click="sendButton">
				<div class="btn-txt">Регистрация</div>
			</button>
		<footer-components/>
	</div>
</template>
<script>

import headerFormComponents from '../components/header-form'
import footerComponents from '../components/footer'
import axios from "axios"

export default {
	name: 'registrationPage',
	data() {
		return {
			info: null,
			loading: true,
			errored: false,
		}
	},
	methods: {
		sendButton() {
			console.log("1");

			axios
    			.post('http://localhost:63002/api/Users/Registration', {
    			    email: "tixdim.on1@gmail.com",
                	nickname: "tixdim",
                    firstPassword: "qweasd",
                    secondPassword: "qweasd",
                    isBoy: true,
                    name: "Dima",
                    surname: "Tix"
    			})
    			.then((response) => (this.info = response))
				.catch(error => {
        			console.log(error["response"]["data"]);
        			this.errored = true;
      			})
				.finally(() => (this.loading = false));

			console.log(this.info)
    		}
		},
	components: {
		headerFormComponents,
		footerComponents,
	}
}
</script>