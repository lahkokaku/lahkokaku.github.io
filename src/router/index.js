import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '@/views/projects/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: IndexView,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/projects/:id',
      name: 'projects-show',
      component: () => import('../views/projects/ShowView.vue'),
      props: true,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: '404', 
      component: () => import('../views/errors/404View.vue'),
      meta: {
        title: '404'
      }
    }
  ],
  scrollBehavior(to){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to) => {
  if(to?.meta?.title){
    document.title = to.meta.title;
  }else{
    document.title = 'JSS Portofolio';
  }
})

export default router
