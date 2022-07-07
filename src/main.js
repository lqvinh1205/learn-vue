import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Vuex from "vuex";
import store from './store/index'
Vue.config.productionTip = false;
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     name: "Vinh",
//   },
//   mutations: {

//   }
// });
new Vue({
  router,
  // store,
  store,
  render: (h) => h(App),
}).$mount("#app");
// import { createApp } from "vue";
// import App from "./App.vue";
// import store from "./store/index";

// const app = createApp(App);

// app.use(store);
// app.mount("#app");
