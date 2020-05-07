import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as VueFire from 'vuefire';
import firebase from 'firebase';

Vue.use(VueFire);

const config = {
  apiKey: "{key}",
  authDomain: "{projectId}.firebaseapp.com",
  databaseURL: "https://{projectId}.firebaseio.com",
  projectId: "{projectId}",
  storageBucket: "{projectId}.appspot."
}

firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
