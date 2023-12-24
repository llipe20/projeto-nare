import { createStore } from 'vuex'

export default createStore({
  state: {
      projects : []
  },
  getters: {
  },
  mutations: {
    UpdateProjetc : (state, data) => {
        state.projects = data
    }
  },
  actions: {
      getProjetcs : async ({commit}) => {
          const req = await fetch('https://json-server-rho-brown.vercel.app/projects')
          const res = await req.json()

          commit("UpdateProjetc", res)
      }
  },
  modules: {
  }
})
