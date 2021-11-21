import { createStore } from "vuex";
import posts from "@/assets/json/posts.json";

export default createStore({
  state: {
    testString: "Just testing Vuex",
    posts: posts
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {},
});
