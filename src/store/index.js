import { createStore } from "vuex";
import posts from "@/assets/json/posts.json";

export default createStore({
  state: {
    testString: "Just testing Vuex",
    posts: posts,
    likes: Object.assign(...posts.map(post => ({ [post.id]: 0 })))
  },
  mutations: {
    incrementLikes(state, postId) {
      state.likes[postId] += 1
    },
    resetCounters(state) {
      state.likes = Object.assign(...posts.map(post => ({ [post.id]: 0 })))
    }
  },
  getters: {
    countLikes(state) {
      return (postId) => state.likes[postId]
    }
  },
  actions: {},
  modules: {},
});