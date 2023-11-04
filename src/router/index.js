import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: () => import("../view/ContactBook.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
