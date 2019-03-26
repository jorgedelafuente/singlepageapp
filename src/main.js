import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import './plugins/vuetify'
import * as firebase from 'firebase'
import App from './App.vue'
import store from './store'
import router from './router'
require('dotenv').config()

Vue.use(VueChatScroll)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: process.env.VUE_APP_APIKEY,
      authDomain: 'ubiqumspa.firebaseapp.com',
      databaseURL: 'https://ubiqumspa.firebaseio.com',
      projectId: 'ubiqumspa',
      storageBucket: 'ubiqumspa.appspot.com',
      messagingSenderId: '356733613405'
    })
  }
}).$mount('#app')
