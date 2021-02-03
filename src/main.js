import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
