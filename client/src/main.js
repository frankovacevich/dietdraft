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
import FoodsView from "./views/FoodsView.vue";

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
    path: "/shopping-list",
    name: "shopping-list",
    component: ListView,
  },
  {
    path: "/foods",
    name: "list",
    component: FoodsView,
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
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as faRegularPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare as faSolidPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);
library.add(faCalendar);
library.add(faCartShopping);
library.add(faCheck);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faEllipsisV);
library.add(faMagnifyingGlass);
library.add(faMap);
library.add(faPlus);
library.add(faRegularPenToSquare);
library.add(faRotateRight);
library.add(faSliders);
library.add(faSolidPenToSquare);
library.add(faTrash);
library.add(faUser);
library.add(faUtensils);
library.add(faXmark);

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
app.mount("#app");
