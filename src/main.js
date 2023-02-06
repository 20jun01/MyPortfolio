import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't elsewhere

Vue.config.productionTip = false

Vue.use(VueAnimXYZ)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
