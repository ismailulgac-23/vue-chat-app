import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/views/auth/login.vue")
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/views/auth/register.vue")
      },
      {
        path: "chat",
        name: "Chat",
        component: () => import("@/views/chat/index.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
