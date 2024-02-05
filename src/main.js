import '@/assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faCaretDown, faFloppyDisk, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faMagnifyingGlass, faCaretDown, faGear, faArrowLeft, faFloppyDisk)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)

app.mount('#app')
