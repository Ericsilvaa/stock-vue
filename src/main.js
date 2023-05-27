import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import './router'


Vue.config.productionTip = false

Vue.filter('currency', value => {
	return `R$ ${value.toLocaleString()}`
})

new Vue({
	render: h => h(App),
}).$mount('#app')
