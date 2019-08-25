import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Tools from './views/tools/Tools.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Tools,
      children: [
        { path: 'base64', component: () => import('./views/tools/components/Base64.vue')},
        { path: 'jsonformat', component: () => import('./views/tools/components/JsonFormat.vue')},
        { path: 'tomd5', component: () => import('./views/tools/components/ToMD5.vue')}
      ]
    }
  ]
})
