require('./bootstrap');
require('./jquery');

// JS CORE THEME
import '../js/assets/js/core/popper.min.js';
import '../js/assets/js/core/bootstrap.min.js'
import '../js/assets/js/plugins/perfect-scrollbar.min.js';
import '../js/assets/js/plugins/smooth-scrollbar.min.js';
import '../js/assets/js/plugins/fullcalendar.min.js';
import '../js/assets/js/plugins/chartjs.min.js';
import '../js/assets/js/soft-ui-dashboard.min.js';

// LIBRARY
import { createApp } from 'vue';
import App from './vue/App.vue';
import router from './vue/router/Index.vue';
import VueLazyLoad from 'vue3-lazyload'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter, faFacebook, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faHouse, faTwitter, faFacebook, faStackOverflow, faGithub);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(VueLazyLoad, {
    loading: '',
    error: '',
    lifecycle: {
      loading: (el) => {
        console.log('loading', el)
      },
      error: (el) => {
        console.log('error', el)
      },
      loaded: (el) => {
        console.log('loaded', el)
      }
    }
})
app.mount('#app');