import { createRouter, createWebHistory } from "vue-router";
import Posts from "../views/Posts.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
