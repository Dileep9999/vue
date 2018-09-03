import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FormValidation from '@/components/FormValidation'
import kart from '@/components/cart'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
   
    {
      path: '/',
      name: 'FormValidation',
      component: FormValidation
    },
    {
      path:'/kart',
      name:'kart',
      component:kart

    }
  ]
})
