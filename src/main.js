import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import langs from './lang/index'
import vueScrollactive from 'vue-scrollactive'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'

import './assets/style.css'
AOS.init()
Vue.use(AOS)
Vue.use(VueI18n)
Vue.use(vueScrollactive)

const i18n = new VueI18n({
  locale: 'en',
  messages: langs
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
