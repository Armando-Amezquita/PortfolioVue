import { createApp } from 'vue';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';
//<!-- <fa icon="coffee" /> -->
//Asi se importan todos los iconos pero es mala practica.
// import { fab } from '@fortawesome/free-brands-svg-icons';
//<!-- <fa class="youtube" icon="fa-solid faLinkedin" /> -->

import { faGithub, faLinkedin, faVuejs } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';


library.add(faGithub, faLinkedin, faVuejs, faEnvelope );

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon);
    

app.use(router);
app.use(store);

app.mount('#app');
