import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import menuList from './modules/menulist'

Vue.use(Vuex)

const state = {
  token: null,
  username: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    menuList
  }
})
