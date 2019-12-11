import Vue from 'vue'
import App from './App'


//注册全局组件
//Vue.component('App',App)



new Vue({
   el:'#root',

   //注册局部组件
   components:{
     App:App
   },
   template:'<App/>',
   
})