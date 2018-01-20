import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const index = () => import('views/index.vue')
const index = (resolve) => require(['views/index.vue'], resolve)
const example = (resolve) => require(['views/example.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/example',
      component: example
    }
  ]
})
