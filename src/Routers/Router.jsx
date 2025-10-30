import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import PrivetRouter from "./PrivetRouter";
import Details from "../Pages/Details";
import PasswordReset from "../Pages/PasswordReset";
import Profile from "../Pages/Profile";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "services/:serviceId",
        element: (
          <PrivetRouter>
            <Details />
          </PrivetRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRouter>
            <Profile />
          </PrivetRouter>
        ),
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/password-reset",
        Component: PasswordReset,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
