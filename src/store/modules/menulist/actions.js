import * as types from './types'

export default {
  getMenuList ({ commit }, data) {
    commit(types.MenuList, data)
  }
}
