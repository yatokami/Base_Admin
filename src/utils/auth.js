const TOKEN = 'token'
const MANAGER = 'userinfo'

export default {
  name: 'auth',
  /**
   * 获取 auth 返回：管理员信息和token
   * @returns {Object}
   */
  get () {
    return {
      [MANAGER]: JSON.parse(localStorage.getItem('userinfo')),
      [TOKEN]: localStorage.getItem('token')
    }
  },

  /**
   * 登出
   */
  logout () {
    localStorage.removeItem(MANAGER)
    localStorage.removeItem(TOKEN)
  },

  /**
   * 是否已登录
   * @return {boolean}
   */
  loggedIn () {
    return !!localStorage.getItem(MANAGER) && !!localStorage.getItem(TOKEN)
  }
}
