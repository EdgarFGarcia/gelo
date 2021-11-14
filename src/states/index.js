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
      },
      clearname(state){
        state.name = []
      }
    },
    actions: {
      async setname({commit}, v){
        // console.log(v)
        await Vue.axios.post('aInfo', v)
        commit('setname', v)
      },
      clear({commit}){
        commit('clearname')
      },
      async getdatafapi({commit}){
        await Vue.axios.get('getdata')
        .then(({data}) => {
          if(data.response){
            commit('setname', data.data)
          }
        }) 
      },
      async editentry({state}, data){
        const dname = state.name[0].filter(
          q => q.id == data.id
        )
        dname.name = data.name
        dname.address = data.address
        await Vue.axios.patch(`edititem/${data.id}`, {data: data})
      },
      async deleteentry({commit, state}, data, index){
        console.log(commit, state.name, data)
        state.name[0].splice(index, 1)
        await Vue.axios.delete(`deleteitem/${data.id}`)
      }
    },
    getters: {
      getname(state){
        return state.name
      }
    }
})

export default store