import axios from 'axios'

const state = () => ({
  products: [],
  errors: []
})

const mutations = {
  SET_PRODUCTS_ERROR (state, errors) {
    state.errors = errors
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  }
}

const actions = {
  async fetchProducts ({ commit }) {
    await axios.get(`${process.env.VUE_APP_APIURL}/products2`)
      .then(response => {
        commit('SET_PRODUCTS', response.data)
      })
      .catch(error => {
        commit('SET_PRODUCTS_ERROR', error)
      })
  },
  async searchProducts ({ commit }, [type, sort]) {
    const [sortBy, order] = sort.split('_')
    await axios.get(`${process.env.VUE_APP_APIURL}/products2`, { params: { q: type, _sort: sortBy, _order: order } })
      .then(response => {
        commit('SET_PRODUCTS', response.data)
      })
      .catch(error => {
        commit('SET_PRODUCTS_ERROR', error)
      })
  }
}

export default {
  state,
  actions,
  mutations
}
