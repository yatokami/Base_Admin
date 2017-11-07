import * as types from './types'

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.setItem('token', data)
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.USERINFO]: (state, data) => {
    localStorage.setItem('userinfo', JSON.stringify(data))
  }
}

export default mutations
