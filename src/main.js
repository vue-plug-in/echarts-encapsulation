import Vue from 'vue'
import app from './app.vue'
import 'babel-polyfill'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
