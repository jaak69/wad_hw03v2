export default {
  namespaced: true,
  state: () => ({
    counter: 0,
  }),
  getters: {
    total: (state) => state.counter,
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    reset(state, { value }) {
      state.counter = value;
    },
  },
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    },
    decrement: ({ commit }) => {
      commit("decrement");
    },
    reset: ({ commit }, payload) => {
      commit("reset", payload);
    },
  },
};
