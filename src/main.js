import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import PortalVue from "portal-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(PortalVue);

Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
