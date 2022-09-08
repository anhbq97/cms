require('./bootstrap');
require('./jquery');

// JS CORE THEME
import '../js/assets/js/core/popper.min.js';
import '../js/assets/js/plugins/perfect-scrollbar.min.js';
import '../js/assets/js/plugins/smooth-scrollbar.min.js';
import '../js/assets/js/soft-ui-dashboard.min.js';

// LIBRARY
import { createApp } from 'vue';
import App from './vue/App.vue';
import router from './vue/router/Index.vue';
import lazyPlugin from 'vue3-lazy';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret);


const app = createApp(App);

app.use(lazyPlugin, {
    loading: 'loading.png',
    error: 'error.png'
});
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');