import './assets/main.css'

import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import { router } from './App.vue'

createApp(App).use(router).mount('#app')
