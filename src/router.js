import { createRouter, createWebHistory } from 'vue-router';
import Layout from './layout/Layout.vue';
import Skills from './pages/Skills.vue';
import About from './pages/About.vue';
import Experiences from './pages/Experiences.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';


const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'about',
        component: About,
        meta: { transition: 'slide-left' },
      },
      {
        path: '/skills',
        name: 'skills',
        component: Skills,
        meta: { transition: 'slide-left' },
      },
      {
        path: '/experience',
        name: 'experience',
        component: Experiences
      },
      {
        path: '/projects',
        name: 'projects',
        component: Projects
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      }
    ]
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;