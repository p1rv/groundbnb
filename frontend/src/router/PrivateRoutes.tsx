import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../providers/UserProvider/UserProvider";

const PrivateRoutes = () => {
  const { user, isLoading } = useContext(UserContext);
  const isAuth = !!user;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
