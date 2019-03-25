import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#5f5f5f',
    secondary: '#546E7A',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#009688',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
