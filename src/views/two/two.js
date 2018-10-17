// import Vue from 'vue'
import App from './two.vue'//必须加.vue后缀 不然加载不了

new Vue({
	render: h => h(App)
}).$mount('#app')