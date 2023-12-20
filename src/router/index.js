import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormContainerVue from '../views/FormContainer.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormContainer.vue')
  },
  {
    path:'/E-Invoice',
    name:'E-Invoice_page_invoice',
    component:FormContainerVue,
    props:true,
  },
  {
    path:'/E-invoice/Records',
    name:'E-Invoice_records',
    component:()=>import('../views/List_Container/existing_data.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
