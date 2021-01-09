import { createStore } from 'vuex'
import { getUserInfo, User } from '@/api/user'

export interface State {
  user: User
}

const store = createStore<State>({
  state: {
    user: {
      id: 0,
      username: '',
      email: ''
    }
  },
  getters: {
    isLogin(state) {
      return state.user.id
    }
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      try {
        const { data } = await getUserInfo()
        commit('setUser', data)
      } catch (e) {
        commit('setUser', { id: 0, username: '', email: '' })
      }
    }
  }
})

export default store
