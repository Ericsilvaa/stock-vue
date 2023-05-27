<template>
	<v-app>
		<Header></Header>
		<v-container>
			<router-view></router-view>
		</v-container>
	</v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'AppVue',
	components: {
		Header
	}

}
</script>

<style>

</style>

