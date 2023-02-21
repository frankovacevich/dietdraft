import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*
 * Styles
 */
import './assets/main.css'

/*
 * Create app
 */
const app = createApp(App)
app.use(router)

/*
 * Font awesome icons
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronLeft)
library.add(faChevronRight)
app.component('font-awesome-icon', FontAwesomeIcon)

/*
 * Mount
 */
app.mount('#app')
