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
store.planInfo = {
  created: 0,
  proteinSetpoint: 100,
  fatSetpoint: 100,
  carbsSetpoint: 100,
  daysSetpoint: 2,
  calculationMethod: CalculationMethod.ALL,
};
store.load();
////////////////////////////////////////////////////////

/*
 * Font awesome icons
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { CalculationMethod } from "./food";

library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faMap);
library.add(faEllipsis);
app.component("font-awesome-icon", FontAwesomeIcon);

/*
 * Mount
 */
app.mount("#app");
