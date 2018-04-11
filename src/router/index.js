import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Click'
import Custom from '@/components/Custom'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/hello',
      name: 'hello',
      component: Hello,
      subRoutes:{

      }
    },
    {
      path:'/custom',
      name: 'custom',
      component: Custom
    }

  ]
})
