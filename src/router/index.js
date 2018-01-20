import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const index = () => import('views/index.vue')
const index = (resolve) => require(['views/index.vue'], resolve)
const introduce = (resolve) => require(['views/introduce.vue'], resolve)
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
      path: '/component/example',
      component: example
    },
    {
      path: '/introduce',
      component: introduce
    }
  ]
})
