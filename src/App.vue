<template>
  <div>
    App
   <p>click {{count}} times, count is {{evenOrOdd}}</p>
   <button @click="increment">+</button>
   <button @click="decrement">-</button>
   <button @click="incrementIfOdd">increment if odd</button>
   <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">

  /* 
  store对象
    1. state: 包含所有state数据的对象
    2. getters: 包含所有getter计算属性的对象
    3. dispatch(actionName, data)
    4. commit(mutationName, data)

  */

import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

 export default {
    

    computed: {
      // count(){
      //   return this.$store.state.count
      // },
      // evenOrOdd(){
      //   return this.$store.getters.evenOrOdd
      // },

      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },

    methods: {
      // increment () {
      //   this.$store.commit('jia')
      // },

      // decrement () {
      //   this.$store.commit('jian')
      // },

      // incrementIfOdd () {
      //   this.$store.dispatch('oddjia')
      // },

      // incrementAsync () {
      //   this.$store.dispatch('yibujia')
      // },

      ...mapMutations({
        increment:'jia',
        decrement:'jian'
      }),
      ...mapActions({ 
        incrementIfOdd:'oddjia',
        incrementAsync:'yibujia'
      })
    }
  }
 
</script>

<style scoped>


</style>