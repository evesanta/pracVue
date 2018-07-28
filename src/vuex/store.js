import Vuex from 'vuex'
import Vue from 'vue'

import {
  CHANGE_NAME,
  REALTIME
} from './mutation-types'

Vue.use(Vuex)

const state = {
  name: '',
  realtime: ''
}

const actions = {
  [CHANGE_NAME] ({ commit }, name) {
    commit(CHANGE_NAME, name)
  },
  [REALTIME] ({ commit }, name) {
    commit(REALTIME, name)
  }
}

const getters = {
  getName: state => state.name,
  getRealTime: state => state.realtime
}

const mutations = {
  [CHANGE_NAME] (state, name) {
    state.name = name
  },
  [REALTIME] (state, name) {
    state.realtime = name
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
