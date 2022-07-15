import Vue from "vue";
import VueRouter from "vue-router";
import PostPages from "@/views/PostPages.vue";
import FormPosts from "@/components/admin/FormPosts.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/layout/AdminLayout.vue"),
    children: [
      { path: "/", component: PostPages },
      { path: "/post/add", component: FormPosts },
      { path: "/post/:id/edit", component: FormPosts },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
