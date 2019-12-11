<template>
  <div>
    <div>
      <p>click {{count}} times ,count is {{evenorodd}}</p>
      <button @click='jia'>+</button>
      <button @click='jian'>-</button>
      <button @click='oddjia'>oddjia</button>
      <button @click='yibujia'>yibujia</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        count:0
      }
    },
    computed: {
      evenorodd(){
        return this.count%2===1?'奇数':'偶数'
      }
    },
    methods:{
      jia(){
        this.count ++
      },
      jian(){
        this.count --
      },
      oddjia(){
        if (this.count%2===1) {
          this.count++
        }
      },
      yibujia(){
        setTimeout(() => {
          this.count ++
        }, 1000);
      },
    },
  }
</script>

<style scoped>

 
</style>
