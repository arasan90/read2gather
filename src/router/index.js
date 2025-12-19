import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LibraryView from '../views/LibraryView.vue'
import DiscoverView from '../views/DiscoverView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/library',
      name: 'Library',
      component: LibraryView,
    },
    {
      path: '/discover',
      name: 'Discover',
      component: DiscoverView,
    },
  ],
})

export default router
