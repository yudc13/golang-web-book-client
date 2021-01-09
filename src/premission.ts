import router from './router'
import store from './store'

const WHITELIST: string[] = ['/login', '/register']

router.beforeEach(async (to, from, next) => {
  if (WHITELIST.indexOf(to.path) > -1) {
    next()
    return
  }
  await store.dispatch('getUserInfo')
  next()
})
