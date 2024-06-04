import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js";
import "normalize.css"
import i18n from './i18n.js'
//axios.defaults.baseURL = 'https://localhost:5000/';
//axios.defaults.headers = ['Accept-Language'] = lang;

// Import bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

require('./mixins');
new Vue({
  router,
  
 store,
 i18n,
  render: h => h(App)
}).$mount('#app')