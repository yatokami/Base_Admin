import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/app/Root'
import iView from 'iview'
import Layout from '@/components/Layout'
import home from './routers/home'
import login from './routers/login'
import logout from './routers/logout'
import auth from '@/utils/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          path: '/',
          name: 'layout',
          component: Layout,
          children: [
            home
          ],
          meta: {
            requiresAuth: true
          }
        },
        login,
        logout
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})

export default router
