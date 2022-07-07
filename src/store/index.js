// const storeConfig = {
//   state: {
//     name: "Vinh",
//   },
//   mutations: {
//     increment(state) {
//       state.name = "Le quang Vinh"
//     },
//   },
// };

// export default storeConfig

import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    multilForm: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
export default store