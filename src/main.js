import Vue from "vue";
import App from "./App.vue";

import "../src/scss/base/_variable.scss";
import "../src/scss/checkbox/_checkbox.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
