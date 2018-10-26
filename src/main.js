// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {iconfont: 'mdi'}, {theme:{
  primary: colors.blue.darken4,
  success: colors.green.darken4,
  error: colors.red.darken3,
  note: colors.yellow.darken3
}})
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
