// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import messages from './modules/messages'

Vue.use(Vuex)
Vue.use(VuexFire)
Vue.config.debug = true

const state = {
  messages: []
}

export default new Vuex.Store({
  state,
  mutations: VuexFire.mutations,
  modules: {
    messages
  },
  getters: {
    messages: state => state.messages
  }
})
