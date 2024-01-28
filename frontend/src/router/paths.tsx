import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import PropertyPage from "../pages/Property/Property.container";
import RegisterPage from "../pages/Register/Register.container";
import UserProvider from "../providers/UserProvider";
import PrivateRoutes from "./PrivateRoutes";

export const router = [
  { path: "*", element: <div>404 Not Found</div> },
  {
    path: "/",
    element: <UserProvider />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/property/:id",
        element: <PropertyPage />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
];