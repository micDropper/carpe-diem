import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import PortalVue from "portal-vue";
import "./assets/styles/index.scss";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(PortalVue);

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
