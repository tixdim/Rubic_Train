<template>
	<div class="wrapper">
		<header-components/>
			<div class="circle">
				<div class="circle__loader"></div>
			</div>
		<footer-components/>
	</div>
</template>

<script>
import headerComponents from '../components/header'
import footerComponents from '../components/footer'
export default {
	name: 'loadPage',
	components: {
		headerComponents,
		footerComponents,
	},

}
</script>