import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null,
    // 其他状态
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    // 其他 mutations
  },
  actions: {
    login({ commit }, user) {
      // 处理登录逻辑
      commit('setUser', user)
    },
    // 其他 actions
  },
  modules: {
    // 子模块
  },
})

export default store
