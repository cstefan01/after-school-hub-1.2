import Vue from 'vue'
import App from './App.vue'

import "./assets/css/base.css"
import "./assets/css/main.css"
import "./assets/css/fonts.css"


/* -------- Start of Font Awesome Imports -------- */

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

library.add(faCartShopping, faGear);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* -------- End of Font Awesome Imports -------- */


new Vue({
  render: (h) => h(App)
}).$mount('#app')
