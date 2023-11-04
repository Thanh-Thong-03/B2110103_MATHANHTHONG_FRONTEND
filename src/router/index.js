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
  },{
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/view/ContactEdit.vue"),
    props: true // Truyền các biến trong $route.params vào làm props
    },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
