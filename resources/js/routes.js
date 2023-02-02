import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AboutUs from "./views/AboutUs.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
  ],
});

export default router;
