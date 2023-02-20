import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'



const app = createApp(App)


app.use(router)

library.add(faChevronLeft)
library.add(faChevronRight)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
