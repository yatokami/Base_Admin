import * as types from './types'

export default {
  UserLogin ({ commit }, data) {
    commit(types.LOGIN, data)
  },

  UserLogout ({ commit }) {
    commit(types.LOGOUT)
  },

  UserInfo ({ commit }, data) {
    commit(types.USERINFO, data)
  }
}
