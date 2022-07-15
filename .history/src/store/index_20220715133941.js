import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
    postPages: []
  },
  mutations: {
    SET_POSTS(state, post) {
      state.posts = post
    } 
  }
})
export default store