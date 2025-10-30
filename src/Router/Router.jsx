import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PrivetRouter from "./PrivetRouter";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import Details from "../Pages/Details";
import PasswordReset from "../Pages/PasswordReset";
import Profile from "../Pages/Profile";

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
    ],
  },
]);
