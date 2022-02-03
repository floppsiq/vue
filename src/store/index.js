import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPamentsListData(state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push(payload)
    },
    setCategories(state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 101; i++) {
            items.push({
              date: '03.02.2022',
              category: 'Food',
              id: i,
              value: i
            })
          }
          resolve(items)
        }, 1500)
      }).then(res => {
        commit('setPamentsListData', res)
      })
    },
    loadCategories({ commit }) {
      return new Promise((resolve) => {
        // имитируем работу с сетью
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
        }, 1000)
      })
        .then(res => {
          // запускаем изменение состояния через commit
          commit('setCategories', res)
        })
    }
  },
  getters: {
    getPaymentList: state => state.paymentsList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((acc, cur) => acc + Number(cur.value), 0)
    },
    getCategoryList: state => state.categoryList
  }
})