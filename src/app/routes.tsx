import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Sponsors = lazy(() => import("./pages/Sponsors").then((m) => ({ default: m.Sponsors })));
const Register = lazy(() => import("./pages/Register").then((m) => ({ default: m.Register })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Downloads = lazy(() => import("./pages/Downloads").then((m) => ({ default: m.Downloads })));
const Team = lazy(() => import("./pages/Team").then((m) => ({ default: m.Team })));
const SignUp = lazy(() => import("./pages/SignUp").then((m) => ({ default: m.SignUp })));
const Login = lazy(() => import("./pages/Login").then((m) => ({ default: m.Login })));
const FAQ = lazy(() => import("./pages/FAQ").then((m) => ({ default: m.FAQ })));
const Schedule = lazy(() => import("./pages/Schedule").then((m) => ({ default: m.Schedule })));
const Gallery = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.Gallery })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));
const AdminLogin = lazy(() => import("./admin/AdminLogin").then((m) => ({ default: m.AdminLogin })));
const AdminLayout = lazy(() => import("./admin/AdminLayout").then((m) => ({ default: m.AdminLayout })));
const Dashboard = lazy(() => import("./admin/Dashboard").then((m) => ({ default: m.Dashboard })));
const Registrations = lazy(() => import("./admin/Registrations").then((m) => ({ default: m.Registrations })));
const Exhibitors = lazy(() => import("./admin/Exhibitors").then((m) => ({ default: m.Exhibitors })));
const Messages = lazy(() => import("./admin/Messages").then((m) => ({ default: m.Messages })));
const Settings = lazy(() => import("./admin/Settings").then((m) => ({ default: m.Settings })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "sponsors", Component: Sponsors },
      { path: "register", Component: Register },
      { path: "contact", Component: Contact },
      { path: "downloads", Component: Downloads },
      { path: "team", Component: Team },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },
      { path: "faq", Component: FAQ },
      { path: "schedule", Component: Schedule },
      { path: "gallery", Component: Gallery },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "registrations", Component: Registrations },
      { path: "exhibitors", Component: Exhibitors },
      { path: "messages", Component: Messages },
      { path: "settings", Component: Settings },
    ],
  },
]);