import "./assets/index.scss";

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import vuetify from "./plugins/vuetify";
import carousel from "v-owl-carousel";
import App from "./App.vue";
import router from "../src/router/index";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("carousel", carousel);

new Vue({
  router,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
// export { store }
