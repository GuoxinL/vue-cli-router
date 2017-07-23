import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import News from '@/components/News.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: Hello
    },
    {
      path: '/news/:id/:name',
      component: News
    }
  ]
})
