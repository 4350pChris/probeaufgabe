import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/index.css";
import router from './router'
import VueCompositionAPI from "@vue/composition-api";

Vue.config.productionTip = false

Vue.use(VueCompositionAPI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
