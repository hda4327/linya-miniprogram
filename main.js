import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { RouterMount } from 'uni-simple-router'
import routerLink from './uni-simple-router/component/router-link.vue'

import global_variable from "./common/global_variable"
import global_method from "./common/global_method"
import global from './components/global.vue'
import SupportTip from "./components/content/supportTip/SupportTip.vue"
import ContactBottom from "./components/content/companyInfo/ContactBottom.vue"
import AuthMain from './components/content/auth/Auth.vue'

// Vue.component('router-link',routerLink)

Vue.prototype.$store = store

Vue.prototype.$baseUrl = global_variable.$baseUrl
Vue.prototype.METHOD = global_method
Vue.prototype.$EventBus = new Vue()

App.mpType = 'app'




const app = new Vue({
	...App
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

Vue.component('Global', global)
Vue.component('SupportTip', SupportTip)
Vue.component('ContactBottom', ContactBottom)
Vue.component('AuthMain', AuthMain)

