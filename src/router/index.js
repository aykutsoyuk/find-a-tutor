import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/tutors",
  },
  {
    path: "/tutors",
    component: () => import("../views/tutor/Tutors.vue"),
  },
  {
    path: "/tutor/:id",
    component: () => import("../views/tutor/TutorDetails.vue"),
    children: [
      {
        path: "/contact",
        component: () => import("../views/tutor/TutorContact.vue"),
      },
    ],
  },
  {
    path: "/register",
    component: () => import("../views/register/Register.vue"),
  },
  {
    path: "/messages",
    component: () => import("../views/messages/Messages.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
