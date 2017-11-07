const TOKEN = 'token'
const MANAGER = 'manager'

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
  }
}
