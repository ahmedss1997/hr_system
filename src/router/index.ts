import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/appPages/pages/Authentication/Register/SignUp.vue";
import LogIn from "../views/appPages/pages/Authentication/logIn/LogIn.vue";
import Reset from "../views/appPages/pages/Authentication/resetPassword/Reset.vue";
import employees from "../views/appPages/employees/AllEmployees/employees.vue";
import Profile from "../views/appPages/pages/profile/Profile.vue";
import Department from "../views/appPages/employees/Department/Department.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
      navSide: true,
    },
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
    meta: {
      auth: false,
      navSide: false,
    },
  },
  {
    path: "/logIn",
    alias: "/",
    name: "logIn",
    component: LogIn,
    meta: {
      auth: false,
      navSide: false,
    },
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset,
    meta: {
      auth: false,
      navSide: false,
    },
  },
  {
    path: "/employees/all",
    name: "employees",
    component: employees,
    meta: {
      auth: true,
      navSide: true,
    },
  },
  {
    path: "/Department",
    name: "Department",
    component: Department,
    meta: {
      auth: true,
      navSide: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      auth: true,
      navSide: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
