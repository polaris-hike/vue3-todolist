import {createRouter,createWebHashHistory} from 'vue-router';
import doc from '../views/doc.vue';
import home from '../views/home.vue';

 const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      component:doc
    },
    {
      path:'/home',
      component:home
    },
  ]
})
export default router
