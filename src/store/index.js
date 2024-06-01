import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      name: 'thakaCompany'
    }
  },
  getters: {
    app: state => state.app,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
