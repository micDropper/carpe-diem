import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import PortalVue from "portal-vue";
import "./assets/styles/index.scss";
import router from "./router";
import icons from "./modules/icons";
import store from "./modules/store";

icons();
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(PortalVue);

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
