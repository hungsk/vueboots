import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue' 
import About from './components/About.vue'
import Bootstrap from './components/Bootstrap.vue'

export default createRouter({ 
  history : createWebHistory(), 
  routes: [ 
    { 
      path: '/', 
      name: 'home', 
      component: Home 
    }, 
    { 
      path: '/about', 
      name: 'about', 
      component: About 
    }, 
    { 
      path: '/bootstrap', 
      name: 'bootstrap', 
      component: Bootstrap 
    } 
  ] 
}) 