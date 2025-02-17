import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProgramDetailView from "../views/ProgramDetailView.vue";
import AdminLogin from "../components/AdminLogin.vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/program/:id", component: ProgramDetailView, props: true },
  { path: "/admin", component: AdminLogin },
  { path: "/admin/dashboard", component: AdminDashboard },
  { path: "/admin/view", component: AdminView }
];

export default createRouter({ history: createWebHistory(), routes });