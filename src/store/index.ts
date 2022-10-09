import Vue from "vue";
import Vuex from "vuex";
import * as models from "@/code/models";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {} as models.employee,
    drawerAll: { mini: false, view: true },
    allEmployees: {} as models.employee,
  },
  mutations: {
    get_currentUser(state, data) {
      state.currentUser = data;
    },
    get_drawer(state, data) {
      state.drawerAll = data;
    },
    get_employees(state, data) {
      state.allEmployees = data;
    },
    get_intemployees(state, data) {
      state.currentUser = data;
    },
  },
  actions: {},
  modules: {},
});
