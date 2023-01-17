import { FiActivity, FiClipboard, FiSettings, FiUser } from "react-icons/fi";
import Dashboard from "../pages/Dashboard";
import Dummy from "../pages/Dummy";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPass";
import SendRequestEmail from "../pages/Auth/SendRequest";
import Resetpassword from "../pages/Auth/ResetPassword";
import ListProduct from "../pages/ListProduct";

export const NonAuthRoutes = [
  {
    path: "/login",
    exact: true,
    component: <Login />,
  },
  {
    path: "/forgot-password",
    exact: false,
    component: <ForgotPassword />,
  },
  {
    path: "/send-request",
    exact: false,
    component: <SendRequestEmail />,
  },
  {
    path: "/reset-password",
    exact: false,
    component: <Resetpassword />,
  },
];

export const AuthMenuRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiActivity,
    exact: true,
    component: <Dashboard />,
    children: [],
  },
  {
    name: "Product",
    path: "/list-product",
    icon: FiClipboard,
    exact: true,
    component: <ListProduct />,
    children: [],
  },
  {
    name: "News",
    path: "/news",
    icon: FiClipboard,
    exact: true,
    component: <Dummy />,
    children: [],
  },
  {
    name: "Users",
    path: "/users",
    icon: FiUser,
    exact: true,
    component: null,
    children: [
      {
        name: "All User",
        path: "all",
        exact: true,
        component: <Dummy />,
      },
      {
        name: "Roles",
        path: "roles",
        exact: true,
        component: <Dummy />,
      },
    ],
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
    exact: true,
    component: null,
    children: [
      {
        name: "Config",
        path: "config",
        exact: true,
        component: <Dummy />,
      },
      {
        name: "Parameters",
        path: "parameters",
        exact: true,
        component: <Dummy />,
      },
    ],
  },
];
