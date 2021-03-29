import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    mercadoria: [{TIPO: "", NOME: "", VALOR:"", TOTAL: ""}],
    condicao: "",
    tot: 0
  },
  getters: {
  },
  mutations: {
    OPERATION (state, payload) {
      state.mercadoria.unshift(payload)
    },
  },
  actions: {},
  modules: {},
});
