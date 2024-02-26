import Vue from 'vue'
import App from './App.vue'

import "./assets/css/base.css"
import "./assets/css/main.css"
import "./assets/css/fonts.css"

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../src/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

new Vue({
  render: (h) => h(App)
}).$mount('#app')
