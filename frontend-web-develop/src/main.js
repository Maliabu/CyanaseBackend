import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import Viewer from "v-viewer";
import moment from "moment";
import axios from "axios";

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

Vue.filter("myDate", function(created) {
  return moment(created).format("MMMM Do YYYY, h:mm:ss a");
});

Vue.config.productionTip = false;
Vue.use(Viewer);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
