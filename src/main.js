import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import PortalVue from "portal-vue";
import "./assets/styles/index.scss";
import router from "./router";
import icons from "./modules/icons";

icons();
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(PortalVue);

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
