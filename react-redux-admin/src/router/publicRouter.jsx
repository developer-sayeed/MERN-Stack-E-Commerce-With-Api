import ForgotPage from "../pages/auth/ForgotPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import PublicRouteGard from "./PublicRouteGard";

// create public router
const publicRouter = [
  {
    element: <PublicRouteGard />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot",
        element: <ForgotPage />,
      },
    ],
  },
];

// export router
export default publicRouter;
