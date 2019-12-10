/*
vuex最核心的管理对象模块
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state相当于data的对象，包含n个可变的属性数据
const state = {
  count:0,//初始化状态数据
}

//一个包含n个用于直接更新状态数据的方法对象
//mutations方法不要包含异步操作和逻辑处理代码
const mutations = {
  jia(state){
    state.count++
  },
  jian(state){
    state.count--
  }
}

//一个包含n个基于state数据的getter计算属性的方法的对象
const getters = {
  evenOrOdd(state){
    return state.count%2 === 1 ? '奇数' : '偶数'
  }
}

//一个包含n个用于间接更新状态数据的方法对象
//actions方法可以包含异步操作和逻辑处理代码
const actions = {
  // increment({commit}){
  //   commit('increment')
  // },
  // decrement({commit}){
  //   commit('decrement')
  // },
  oddjia({commit,state}){
    if (state.count%2===1) {
      commit('jia')
    }
  },
  yibujia({commit}){
    setTimeout(() => {
      commit('jian')
    }, 1000);
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})