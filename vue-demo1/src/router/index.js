import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/indexpage'
import DetailPage from '../pages/detailpage'
import CountPage from '../pages/detail/count'
import AnalyPage from '../pages/detail/analysis'
import ForcastPage from '../pages/detail/forecast'
import PublishPage from '../pages/detail/publish'
import OrderPage from '../pages/orderpage'
import Vueresource from 'vue-resource'
import vPage from 'v-page'

Vue.use(vPage)
Vue.use(Router)
Vue.use(Vueresource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children:[
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'analysis',
          component: AnalyPage
        },
        {
          path: 'forecast',
          component: ForcastPage
        },
        {
          path: 'publish',
          component: PublishPage
        }
      ]
    },
    
    {
      path: '/orderpage',
      component: OrderPage
    }
  ]
})

