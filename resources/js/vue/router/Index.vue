<script>
    import Login from '../auth/Login.vue';
    import Register from '../auth/Register.vue';
    import About from '../dashboard/About.vue';
    import Dashboard from '../dashboard/Index.vue';
    import NotFound from '../dashboard/NotFound.vue';
    import { createRouter, createWebHistory } from 'vue-router';
    
    const routes = [
      { 
        path: '/', 
        name: 'Dashboard', 
        component: Dashboard,
        meta: { 
          requiresAuth: true,
          permission: ['all']
        }
      },
      { 
        path: '/about', 
        name: 'About', 
        component: About,
        meta: { 
          requiresAuth: true,
          permission: ['all']
        }
      },
      { 
        path: '/login', 
        name: 'Login', 
        component: Login,
        meta: { 
          requiresAuth: false,
          permission: ['all']
        }
      },
      { 
        path: '/register', 
        name: 'Register', 
        component: Register,
        meta: { 
          requiresAuth: false,
          permission: ['all']
        }
      },
      { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound, 
        meta: { 
          requiresAuth: false,
          permission: ['all']
        }
      },
    ];
    
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    });

    const auth = {
      isLoggedIn: () => {
        if (localStorage.getItem('isLogged')) { return true; }
        return false;
      }
    }

    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth && !auth.isLoggedIn()) {
        next({ name: 'Login' });
      }
      else next();
    });
    
    export default router
</script>