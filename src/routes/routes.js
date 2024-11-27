import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Schedule from "../pages/Schedule";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
    ],
  },
]);
