import axios from 'axios'
import consts from '@/utils/consts'

//
axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      .replace(/(^")|("$)/g, '')
  }
  return config
}, err => {
  return Promise.reject(err)
})
// axios拦截响应
instance.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, err => {
  return Promise.reject(err)
})

export default {
  // 用户注册
  userRegister (data) {
    return instance.post(consts.API_URL + '/regist', data)
  },
  // 用户登录
  UserLogin (data) {
    return instance.post(consts.API_URL + '/login', data)
  },
  // 获取用户
  getUser () {
    return instance.get(consts.API_URL + '/user')
  },
  // 删除用户
  delUser (data) {
    return instance.post(consts.API_URL + '/deleteuser', data)
  },
  // 用户退出
  userLogout () {
    return instance.get(consts.API_URL + '/logout ')
  },
  // 用户目录
  getMenu () {
    return instance.get(consts.API_URL + '/Menu')
  }
}
