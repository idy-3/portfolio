import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound.vue";
import Portfolio from "./pages/Portfolio.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import AddProject from "./pages/AddProject.vue";
import Login from "./pages/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/portfolio" },
    { path: "/portfolio", component: Portfolio },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/add-project", component: AddProject },
    { path: "/login", component: Login },
    { path: "/:notFound(.*)*", component: NotFound },
  ],
});

export default router;
