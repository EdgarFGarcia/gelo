import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    state: {
      name: []
    },
    mutations: {
      setname(state, v){
        state.name.push(v)
      }
    },
    actions: {
      setname({commit}, v){
        commit('setname', v)
      }
    },
    getters: {
      getname(state){
        return state.name
      }
    }
})

export default store