import Vuex from 'vuex'
import Vue from 'vue'

import {
  CHANGE_NAME,
  REALTIME,
  CHANGE_AUTH
} from './mutation-types'

Vue.use(Vuex)

const state = {
  name: '',
  realtime: '',
  auth: ''
}

function check (num) {
  for (var i = 0; i < 10; i++) {
    num = (num * 11177) % 14737
  }
  if (num === 470) return 'ok'
  return 'ng'
}

const actions = {
  [CHANGE_NAME] ({ commit }, name) {
    commit(CHANGE_NAME, name)
  },
  [REALTIME] ({ commit }, name) {
    commit(REALTIME, name)
  },
  [CHANGE_AUTH] ({ commit }, num) {
    commit(CHANGE_AUTH, check(num))
  }
}

const getters = {
  getName: state => state.name,
  getAuth: state => state.auth
}

const mutations = {
  [CHANGE_NAME] (state, name) {
    state.name = name
  },
  [REALTIME] (state, name) {
    state.realtime = name
  },
  [CHANGE_AUTH] (state, num) {
    state.auth = num
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
