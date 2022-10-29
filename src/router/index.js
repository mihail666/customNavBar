import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/home-page"),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("@/views/about-page"),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import("@/views/contact-page"),
    props: true
  },
  {
    path: '/team',
    name: 'team',
    component: () => import("@/views/team-page"),
    props: true
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import("@/views/settings-page"),
    props: true
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router