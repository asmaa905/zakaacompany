import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/pages/AboutUs.vue"),
    },
    {
      path: "/ourServies",
      name: "ourServies",
      component: () => import("../components/pages/OurServies.vue"),
    },
    {
      path: "/OurWorks",
      name: "OurWorks",
      component: () => import("../components/pages/OurProducts.vue"),
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: () => import("../components/pages/ContactUs.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../components/pages/JoinUs.vue"),
    },
    // {
    //   path: "/blog",
    //   name: "blog",
    //   component: () => import("../components/pages/Blog.vue"),
    // },
  ],
});
