import Vuex from 'vuex'
import Vue from 'vue'

import {
  CHANGE_NAME
} from './mutation-types'

Vue.use(Vuex)

const state = {
  name: ''
}

const actions = {
  [CHANGE_NAME] ({ commit }, name) {
    commit(CHANGE_NAME, name)
  }
}

const getters = {
  getName: sate => state.name
}

const mutations = {
  [CHANGE_NAME] (state, name) {
    state.name = name
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
