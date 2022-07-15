import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [],
    postPages: [],
  },
  mutations: {
    SET_POSTS(state, post) {
      state.posts = post;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const { data } = await axios.get(
          `https://627a486d73bad5068585f3e4.mockapi.io/posts`
        );
        commit("SET_POSTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async createPosts({ commit, state }, post) {
      try {
        const { data } = await axios.post(
          `https://627a486d73bad5068585f3e4.mockapi.io/posts`,
          post
        );
        commit("SET_POSTS", [...state.posts, data]);
      } catch (error) {
        console.log(error);
      }
    },
    async removePost({ commit, state }, id) {
      try {
        const { data } = await axios.delete(
          `https://627a486d73bad5068585f3e4.mockapi.io/posts/${id}`
        );
        const dataFilter = state.posts.filter((item) => item.id != data.id);
        commit("SET_POSTS", [...state.posts, dataFilter]);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export default store;
