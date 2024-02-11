/*
App 
*/
import App from "./App.vue";
import { createApp } from "vue";
const app = createApp(App);

/*
Tocuh events
*/
import Vue3TouchEvents from "vue3-touch-events";
app.use(Vue3TouchEvents);

/* 
Styles
*/
import "./assets/style.css";
import "bottom-navigation-vue/dist/style.css";

export const getVariable = (v) => {
  return getComputedStyle(document.body).getPropertyValue(v);
};

/* 
Navigation
*/
import { createRouter, createWebHistory } from "vue-router";
import MainView from "./views/MainView.vue";
import PlanView from "./views/PlanView.vue";
import ListView from "./views/ListView.vue";

const routes = [
  {
    path: "/menu",
    name: "menu",
    component: MainView,
  },
  {
    path: "/plan",
    name: "plan",
    component: PlanView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
  },
  { path: "/:catchAll(.*)", redirect: { name: "menu" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);

/* 
Icons 
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as faSolidPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as faRegularPenToSquare } from "@fortawesome/free-regular-svg-icons";

library.add(faCheck);
library.add(faXmark);
library.add(faArrowLeft);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faMap);
library.add(faEllipsisV);
library.add(faUtensils);
library.add(faRotateRight);
library.add(faCalendar);
library.add(faCartShopping);
library.add(faMagnifyingGlass);
library.add(faTrash);
library.add(faPlus);
library.add(faSolidPenToSquare);
library.add(faRegularPenToSquare);

app.component("font-awesome-icon", FontAwesomeIcon);

/* 
Store 
*/
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

/* 
Init
*/
import { mainStore } from "./store";
const store = mainStore();
store.load();
store.fetchData();
app.mount("#app");
