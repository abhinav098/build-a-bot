import axios from 'axios';
import parts from '../../data/parts';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, robotParts) {
      state.parts = robotParts;
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
  actions: {
    getParts({ commit }) {
      commit('updateParts', parts);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addToCart', robot));
    },
  },
};
