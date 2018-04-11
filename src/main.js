// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.directive('focus',function (el) {
//   el.focus()
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate(){
      console.log('组件刚刚创建')
  },
  created(){
      console.log('组件创建完成')
  }
})
