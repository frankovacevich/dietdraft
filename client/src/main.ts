import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

/*
 * Styles
 */
import "./assets/main.css";

/*
 * Create app
 */
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

/// DELETE ME //////////////////////////////////////////
import { mainStore } from "./store";
const store = mainStore();
store.createPlan(1);
////////////////////////////////////////////////////////

/*
 * Font awesome icons
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faMap);
app.component("font-awesome-icon", FontAwesomeIcon);

/*
 * Mount
 */
app.mount("#app");
