import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: () => import("../view/ContactBook.vue")
  },{
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/view/NotFound.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
