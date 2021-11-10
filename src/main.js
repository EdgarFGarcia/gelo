import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import routes from './router.js'
import store from './states/index.js'

Vue.config.productionTip = false

Vue.use(axios)
// Vue.use(router)
new Vue({
  vuetify,
  router: routes,
  store: store,
  render: h => h(App)
}).$mount('#app')
