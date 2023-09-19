import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import imagesLazyload from './directives/lazyload'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('lazyload', imagesLazyload)

app.mount('#app')
