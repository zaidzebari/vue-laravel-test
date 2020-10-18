<template>
	<div>
		<router-view></router-view>
      	<FlashMessage position="right top"></FlashMessage>
	</div>
</template>

<script>
	import * as auth from './services/auth_service'
export default {
	name: 'App',
	beforeCreate: async function() {
		try {
			  if (auth.isLoaggedIn()) {
				  const response  = await auth.getProfile();
				  console.log('inside app.vue loaded' + response.data);
				  this.$store.dispatch('authenticate', response.data);//second is payload and one is function inside action that will commite authenticate inside mutation
			  }	
		} catch (error) {
			auth.logout();//if any error happen just logout user
		}
	},
	created() {
		document.querySelector("body").style.backgroundColor = "#fff";
	}
};
</script>