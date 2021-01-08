import { createRouter, createWebHistory } from "vue-router";

// Components
import Todos from "../components/Todos/Todos";
import PomodoroApp from "../components/Pomodoro/PomodoroApp";
//Views
import Register from "../views/Register";
import Login from "../views/Login";
//Messages Views
import ErrorPage from "../views/messages/ErrorPage";
import TokenError from "../views/messages/TokenError";
import SuccessRegister from "../views/messages/SuccessRegister";
import ErrorRegister from "../views/messages/ErrorRegister";

const routes = [
  {
    path: "/pomodoro",
    name: "PomodoroApp",
    component: PomodoroApp,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage,
  },
  {
    path: "/error-register",
    name: "ErrorRegister",
    component: ErrorRegister,
  },
  {
    path: "/token-error",
    name: "TokenError",
    component: TokenError,
  },
  {
    path: "/success",
    name: "SuccessRegister",
    component: SuccessRegister,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
